import { React, useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ handleCloseModal, isOpen, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [nameValue, setNameValue] = useState(currentUser.name);
  const [avatarValue, setAvatarValue] = useState(currentUser.avatar);

  const handleNameChange = (evt) => setNameValue(evt.target.value);
  const handleAvatarChange = (evt) => setAvatarValue(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ name: nameValue, avatar: avatarValue });
  };

  return (
    <ModalWithForm title="Change profile data" onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit} buttonText="Save changes">
      <div className="form__container-inputs">
        <label className="form__label">
          Name
          <input
            className="form__input-text"
            name="name"
            type="text"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            required
            value={nameValue}
            onChange={handleNameChange}
          />
        </label>
        <label className="form__label">
          Avatar
          <input className="form__input-text" name="avatar" type="url" placeholder="Image Url" required value={avatarValue} onChange={handleAvatarChange} />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;
