import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
        <ModalWithForm title="New garment">These are the children</ModalWithForm>
      </div>
    </div>
  );
}

export default App;
