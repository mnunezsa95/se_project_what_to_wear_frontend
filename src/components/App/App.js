import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";

import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import ItemModal from "../ItemModal/ItemModal.js";
import { getWeatherForcast, getWeatherData, getLocationData, getWeatherId } from "../../utils/weatherAPI";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTempatureUnitContext.js";

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherId, setweatherId] = useState(800);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState(null); // setting Init. modalState to false
  const [selectedCard, setSelectedCard] = useState({}); // setting initial state

  const handleCreateModal = () => setActiveModal("create"); // function for opening modal
  const handleCloseModal = () => setActiveModal(null); // function for closing modal

  // values is an object of the inputs
  const onAddItem = (values) => {
    console.log(values);
    // console.log(evt.target);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "C" ? setCurrentTemperatureUnit("F") : setCurrentTemperatureUnit("C");
  };

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

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page__wrapper">
          <Header onCreateModal={handleCreateModal} currentLocation={location} />
          <Switch>
            <Route exact path="/">
              <Main onSelectCard={handleSelectedCard} weatherTemp={temp} weatherId={weatherId} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={onAddItem} />}
        </div>
        {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
