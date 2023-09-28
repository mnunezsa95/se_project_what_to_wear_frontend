import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onLogin, onRegisterModal, onSubmit, isLoading }) {
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
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      buttonText={isLoading ? "Logging in..." : "Login"}
      hasRedirectButton={true}
      redirectButtonText="or Register"
      redirectButtonClick={onRegisterModal}
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
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
