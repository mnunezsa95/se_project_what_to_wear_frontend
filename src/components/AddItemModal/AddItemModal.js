import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

function AddItemModal({ handleCloseModal, onAddItem, isOpen, isLoading }) {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weatherTypeInput, setWeatherTypeInput] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleUrlChange = (evt) => {
    setImageUrl(evt.target.value);
  };

  const handleWeatherInputChange = (evt) => {
    setWeatherTypeInput(evt.target.value);
  };

  //! Resetting the values?
  const handleResetInputs = () => {
    setName("");
    setImageUrl("");
    setWeatherTypeInput("");
  };

  React.useEffect(handleResetInputs, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ name, imageUrl, weatherTypeInput });
  }

  return (
    <ModalWithForm title="New garment" buttonText={isLoading ? "Adding..." : "Add Garment"} onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}>
      <div className="form__container-inputs">
        <label className="form__label">
          Name
          <input className="form__input-text" type="text" value={name} minLength="1" maxLength="30" required placeholder="Name" onChange={handleNameChange} />
        </label>
        <label className="form__label">
          Image
          <input className="form__input-text" type="url" value={imageUrl} minLength="1" required placeholder="Image URL" onChange={handleUrlChange} />
        </label>
      </div>
      <p className="form__prompt">Select the weather type:</p>
      <div className="form__container-selections">
        <input className="form__input-selector" name="weatherRadioInput" type="radio" id="hot" value="hot" onChange={handleWeatherInputChange} />
        <label className="form__label-selector" htmlFor="hot">
          Hot
        </label>
      </div>
      <div className="form__container-selections">
        <input className="form__input-selector" name="weatherRadioInput" type="radio" id="warm" value="warm" onChange={handleWeatherInputChange} />
        <label className="form__label-selector" htmlFor="warm">
          Warm
        </label>
      </div>
      <div className="form__container-selections">
        <input className="form__input-selector" name="weatherRadioInput" type="radio" id="cold" value="cold" onChange={handleWeatherInputChange} />
        <label className="form__label-selector" htmlFor="cold">
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
