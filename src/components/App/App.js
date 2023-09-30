import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import ItemModal from "../ItemModal/ItemModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import { getCurrentUserLocation, getWeatherForcast, getWeatherData, getLocationCity, getWeatherId } from "../../utils/weatherAPI.js";
import { editUserProfile, fetchClothingItems, postClothingItems, deleteClothingItems, addCardLike, removeCardLike } from "../../utils/api.js";
import { signUp, signIn, authorizeToken } from "../../utils/auth.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherId, setweatherId] = useState(800);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = React.useState("");

  const handleLoginModal = () => setActiveModal("login");
  const handleRegisterModal = () => setActiveModal("register");
  const handleCreateModal = () => setActiveModal("create");
  const handleEditModal = () => setActiveModal("edit");
  const handleCloseModal = () => setActiveModal(null);
  const handleToggleSwitchChange = () => (currentTemperatureUnit === "C" ? setCurrentTemperatureUnit("F") : setCurrentTemperatureUnit("C"));

  const handleRegistration = ({ emailValue, passwordValue, nameValue, avatarValue }) => {
    setIsLoading(true);
    signUp({ email: emailValue, password: passwordValue, name: nameValue, avatar: avatarValue })
      .then((res) => {
        setCurrentUser(res);
        handleSignIn({ emailValue, passwordValue });
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const handleSignIn = ({ emailValue, passwordValue }) => {
    setIsLoading(true);
    signIn({ email: emailValue, password: passwordValue })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(localStorage.getItem("jwt"));
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const handleEditProfile = (data) => {
    setIsLoading(true);
    editUserProfile(data)
      .then((res) => setCurrentUser(res))
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const handleSignOut = () => {
    setToken(localStorage.removeItem("jwt"));
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleAddItemSubmit = (values) => {
    setIsLoading(true);
    postClothingItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (selectedCard) => {
    deleteClothingItems(selectedCard._id)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => cards._id !== selectedCard._id);
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
  };

  const handleLikeClick = ({ _id, isLiked, user }) => {
    !isLiked
      ? addCardLike(_id)
          .then((updatedCard) => setClothingItems((cards) => cards.map((card) => (card._id === _id ? updatedCard.item : card))))
          .catch((err) => console.error(err))
      : removeCardLike(_id)
          .then((updatedCard) => setClothingItems((cards) => cards.map((card) => (card._id === _id ? updatedCard.item : card))))
          .catch((err) => console.error(err));
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      authorizeToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error("Invalid token: ", err));
    }
  }, [token]);

  useEffect(() => {
    getCurrentUserLocation()
      .then((location) => {
        console.log(location);
        getWeatherForcast(location).then((data) => {
          const tempFromAPI = getWeatherData(data);
          setTemp(tempFromAPI);
          const cityFromAPI = getLocationCity(data);
          setLocation(cityFromAPI);
          setweatherId(getWeatherId(data));
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchClothingItems()
      .then((data) => setClothingItems(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <div className="page__wrapper">
            <Header
              currentLocation={location}
              isLoggedIn={isLoggedIn}
              onCreateModal={handleCreateModal}
              onRegisterModal={handleRegisterModal}
              onLoginModal={handleLoginModal}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  onSelectCard={handleSelectedCard}
                  weatherTemp={temp}
                  weatherId={weatherId}
                  clothingItems={clothingItems}
                  onCardLike={handleLikeClick}
                  isLoggedIn={isLoggedIn}
                />
              </Route>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Route path="/profile">
                  <Profile
                    onSelectCard={handleSelectedCard}
                    clothingItems={clothingItems}
                    onCreateModal={handleCreateModal}
                    onSignOut={handleSignOut}
                    onEditModal={handleEditModal}
                    onEditProfile={handleEditProfile}
                    onCardLike={handleLikeClick}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                  />
                </Route>
              </ProtectedRoute>
            </Switch>
            <Footer />
            {activeModal === "create" && (
              <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={handleAddItemSubmit} isLoading={isLoading} />
            )}
            {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} handleDeleteCard={handleDeleteCard} />}
            {activeModal === "register" && (
              <RegisterModal
                isOpen={activeModal === "register"}
                handleCloseModal={handleCloseModal}
                onLoginModal={handleLoginModal}
                onSubmit={handleRegistration}
                isLoading={isLoading}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                isOpen={activeModal === "login"}
                handleCloseModal={handleCloseModal}
                onRegisterModal={handleRegisterModal}
                onSubmit={handleSignIn}
                isLoading={isLoading}
              />
            )}
            {activeModal === "edit" && (
              <EditProfileModal isOpen={activeModal === "edit"} handleCloseModal={handleCloseModal} onSubmit={handleEditProfile} isLoading={isLoading} />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
