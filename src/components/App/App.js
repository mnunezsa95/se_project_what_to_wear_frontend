import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
