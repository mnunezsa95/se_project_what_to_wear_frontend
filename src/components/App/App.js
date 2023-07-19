import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import ItemModal from "../ItemModal/ItemModal.js";
import { getWeatherForcast, getWeatherData, getLocationData, getWeatherId } from "../../utils/weatherAPI";

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherId, setweatherId] = useState(800);

  const [activeModal, setActiveModal] = useState(null); // setting Init. modalState to false
  const [selectedCard, setSelectedCard] = useState({}); // setting initial state

  const handleCreateModal = () => setActiveModal("create"); // function for opening modal
  const handleCloseModal = () => setActiveModal(null); // function for closing modal
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
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
      <div className="page__wrapper">
        <Header onCreateModal={handleCreateModal} currentLocation={location} />
        <Main onSelectCard={handleSelectedCard} weatherTemp={temp} weatherId={weatherId} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm title="New garment" onClose={handleCloseModal}>
            <div className="form__container-inputs">
              <label className="form__label">
                Name
                <input className="form__input-text" type="text" name="name" minLength="1" maxLength="30" required placeholder="Name" />
              </label>
              <label className="form__label">
                Image
                <input className="form__input-text" type="url" name="imageURL" minLength="1" required placeholder="Image URL" />
              </label>
            </div>
            <p className="form__prompt">Select the weather type:</p>
            <div className="form__container-selections">
              <input className="form__input-selector" type="radio" id="hot" value="hot" />
              <label className="form__label-selector">Hot</label>
            </div>
            <div className="form__container-selections">
              <input className="form__input-selector" type="radio" id="warm" value="warm" />
              <label className="form__label-selector">Warm</label>
            </div>
            <div className="form__container-selections">
              <input className="form__input-selector" type="radio" id="cold" value="cold" />
              <label className="form__label-selector">Cold</label>
            </div>
          </ModalWithForm>
        )}
      </div>
      {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
