import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function App() {
  const [activeModal, setActiveModal] = useState(false); // setting Init. modalState to false
  const handleCreateModal = () => setActiveModal(true); // function for opening modal
  const handleCloseModal = () => setActiveModal(false); // function for closing modal

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header onCreateModal={handleCreateModal} />
        <Main />
        <Footer />
        {activeModal === true && (
          <ModalWithForm title="New garment" onClose={handleCloseModal}>
            <div className="form__container-inputs">
              <label className="form__label">
                Name
                <input className="form__input" type="text" name="name" minLength="1" maxLength="30" required placeholder="Name"></input>
              </label>
              <label className="form__label">
                Image
                <input className="form__input" type="url" name="imageURL" minLength="1" required placeholder="Image URL"></input>
              </label>
            </div>
            <div className="form__container-selections">
              <p className="form__subheading">Select the Weather Type</p>
              <div>
                <div>
                  <input className="" type="radio" id="hot" value="hot" />
                  <label className="">
                    <span className="form__input-item">Hot</span>
                  </label>
                </div>
              </div>
            </div>
          </ModalWithForm>
        )}
      </div>
    </div>
  );
}

export default App;
