import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ handleCloseModal, onAddItem, isOpen }) {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleUrlChange = (evt) => {
    setImageUrl(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ name, imageUrl });
  }

  return (
    <ModalWithForm title="New garment" onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}>
      <div className="form__container-inputs">
        <label className="form__label">
          Name
          <input className="form__input-text" type="text" name="name" minLength="1" maxLength="30" required placeholder="Name" onChange={handleNameChange} />
        </label>
        <label className="form__label">
          Image
          <input className="form__input-text" type="url" name="imageURL" minLength="1" required placeholder="Image URL" onChange={handleUrlChange} />
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
  );
}

export default AddItemModal;
