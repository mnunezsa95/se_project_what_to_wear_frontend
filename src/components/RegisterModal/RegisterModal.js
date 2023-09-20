import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { register } from "../../auth.js";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function RegisterModal({ handleCloseModal, isOpen, buttonText = "Next" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (evt) => {
    console.log(evt.target.value);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    console.log(evt.target.value);
    setPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    console.log(evt.target.value);
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    console.log(evt.target.value);
    setAvatar(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.PreventDefault();
    const { email, password, name, avatar } = this.state;
    register(email, password, name, avatar);
  };

  const handleLogin = (evt) => {
    evt.PreventDefault();
    return <Redirect to="/login" />;
  };

  return (
    <ModalWithForm title="Register" onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}>
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
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="form__label">
          Avatar
          <input className="form__input-text" name="avatar" type="url" placeholder="Image Url" required value={avatar} onChange={handleAvatarChange} />
        </label>
        <div>
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
          <button className="modal__login-button" type="button" onChange={handleLogin}>
            or login
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
