import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ handleCloseModal, isOpen, onLoginModal, onSubmit, isLoading }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [avatarValue, setAvatarValue] = useState("");

  const handleEmailChange = (evt) => setEmailValue(evt.target.value);
  const handlePasswordChange = (evt) => setPasswordValue(evt.target.value);
  const handleNameChange = (evt) => setNameValue(evt.target.value);
  const handleAvatarChange = (evt) => setAvatarValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(emailValue, passwordValue, nameValue, avatarValue);
    onSubmit({ emailValue, passwordValue, nameValue, avatarValue });
  };

  return (
    <ModalWithForm
      title="Register"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Signing up..." : "Next"}
      hasRedirectButton={true}
      redirectButtonText="or Login"
      redirectButtonClick={onLoginModal}
    >
      <div className="form__container-inputs">
        <label className="form__label">
          Email
          <input className="form__input-text" name="email" type="email" placeholder="Email" required value={emailValue} onChange={handleEmailChange} />
        </label>
        <label className="form__label">
          Password
          <input
            className="form__input-text"
            name="password"
            type="text"
            minLength="1"
            maxLength="8"
            placeholder="Password"
            required
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </label>
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

export default RegisterModal;
