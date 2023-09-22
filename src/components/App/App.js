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
import { getWeatherForcast, getWeatherData, getLocationData, getWeatherId } from "../../utils/weatherAPI.js";
import { fetchClothingItems, postClothingItems, deleteClothingItems } from "../../utils/api.js";
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
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [token, setToken] = React.useState("");

  const handleLoginModal = () => setActiveModal("login");
  const handleRegisterModal = () => setActiveModal("register");
  const handleCreateModal = () => setActiveModal("create");
  const handleCloseModal = () => setActiveModal(null);
  const handleToggleSwitchChange = () => (currentTemperatureUnit === "C" ? setCurrentTemperatureUnit("F") : setCurrentTemperatureUnit("C"));

  const handleRegistration = ({ emailValue, passwordValue, nameValue, avatarValue }) => {
    signUp({ email: emailValue, password: passwordValue, name: nameValue, avatar: avatarValue })
      .then((res) => {
        setCurrentUser(res);
        handleSignIn({ emailValue, passwordValue });
        setIsLoggedIn(true);
        setActiveModal(null);
      })
      .catch((err) => console.error(err));
  };

  const handleSignIn = ({ emailValue, passwordValue }) => {
    signIn({ email: emailValue, password: passwordValue })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(localStorage.getItem("jwt"));
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err));
  };

  const handleAddItemSubmit = (values) => {
    postClothingItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (selectedCard) => {
    deleteClothingItems(selectedCard._id)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards._id !== selectedCard._id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
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
    getWeatherForcast()
      .then((data) => {
        const tempFromAPI = getWeatherData(data);
        setTemp(tempFromAPI);
        const locationFromAPI = getLocationData(data);
        setLocation(locationFromAPI);
        setweatherId(getWeatherId(data));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                <Main onSelectCard={handleSelectedCard} weatherTemp={temp} weatherId={weatherId} clothingItems={clothingItems} />
              </Route>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Route path="/profile">
                  <Profile onSelectCard={handleSelectedCard} clothingItems={clothingItems} onCreateModal={handleCreateModal} />
                </Route>
              </ProtectedRoute>
            </Switch>
            <Footer />
            {activeModal === "create" && <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={handleAddItemSubmit} />}
            {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} handleDeleteCard={handleDeleteCard} />}
            {activeModal === "register" && (
              <RegisterModal
                isOpen={activeModal === "register"}
                handleCloseModal={handleCloseModal}
                onLoginModal={handleLoginModal}
                onSubmit={handleRegistration}
              />
            )}
            {activeModal === "login" && (
              <LoginModal isOpen={activeModal === "login"} handleCloseModal={handleCloseModal} onRegisterModal={handleRegisterModal} onSubmit={handleSignIn} />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
