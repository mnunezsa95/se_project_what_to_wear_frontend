import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onLogin, buttonText = "Log in", onRegisterModal, onSubmit }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (evt) => setEmailValue(evt.target.value);
  const handlePasswordChange = (evt) => setPasswordValue(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(emailValue, passwordValue);
    onSubmit({ emailValue, passwordValue });
  };

  return (
    <ModalWithForm title="Login" onClose={handleCloseModal} onSubmit={handleSubmit} isOpen={isOpen}>
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

        <div>
          <button className="modal__submit-button" type="submit" name="button">
            {buttonText}
          </button>
          <button className="modal__register-button" type="button" onClick={onRegisterModal}>
            or Register
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
