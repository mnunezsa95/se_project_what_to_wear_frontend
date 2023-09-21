import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onLogin, buttonText = "Log in", onRegisterModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    console.log(evt.target.value);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    console.log(evt.target.value);
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.PreventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm title="Login" onClose={handleCloseModal} onSubmit={handleSubmit} isOpen={isOpen}>
      <div className="form__container-inputs">
        <label className="form__label">
          Email
          <input className="form__input-text" name="email" type="email" placeholder="Email" required value={email} onChange={handleEmailChange} />
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
            value={password}
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
