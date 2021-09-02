import React from "react";
import "./Home.css";
import logo from "./roseapothlogo.png";
import basket from "./basket.png";

function Home() {
  return (
    <div className="logo">
      <a href="/" className="logoimg">
        <img src={logo} alt="Rose Apothecary" />
      </a>
      <div className="links">
        <a href="/shop" className="link">
          SHOP
        </a>

        <a href="/account" className="link">
          LOGIN/SIGNUP
        </a>
        <a href="basket" className="link">
          <img src={basket} alt="basket"></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
