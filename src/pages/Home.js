import React from "react";
import "./Home.css";
import logo from "./roseapothlogo.jpeg";

function Home() {
  return (
    <div className="logo">
      <img src={logo} alt="Rose Apothecary" id="logo" />
      <div className="links">
        <a href="/shop" className="links">
          SHOP*
        </a>

        <a href="/account" className="links">
          *LOGIN/SIGNUP
        </a>
      </div>
    </div>
  );
}

export default Home;
