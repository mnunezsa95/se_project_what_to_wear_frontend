import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { getWeatherForcast, getWeatherData, getLocationData, getWeatherId } from "../../utils/weatherAPI";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { fetchClothingItems, postClothingItems, deleteClothingItems } from "../../utils/api.js";
import { signUp, signIn } from "../../utils/auth";

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

  const handleLoginModal = () => setActiveModal("login");
  const handleRegisterModal = () => setActiveModal("register");
  const handleCreateModal = () => setActiveModal("create");
  const handleCloseModal = () => setActiveModal(null); // function for closing modal

  const handleRegistration = ({ emailValue, passwordValue, nameValue, avatarValue }) => {
    signUp({ email: emailValue, password: passwordValue, name: nameValue, avatar: avatarValue })
      .then((res) => {
        setCurrentUser(res);
        handleSignIn({ emailValue, passwordValue });
      })
      .catch((err) => console.error(err));
  };

  const handleSignIn = ({ emailValue, passwordValue }) => {
    signIn({ email: emailValue, password: passwordValue })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleAddItemSubmit = (values) => {
    console.log(values);
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
    deleteClothingItems(selectedCard)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards.id !== selectedCard.id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
  };

  const handleToggleSwitchChange = () => (currentTemperatureUnit === "C" ? setCurrentTemperatureUnit("F") : setCurrentTemperatureUnit("C"));

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
  }, []); // dependency to start only once during mounting

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
  );
}

export default App;
