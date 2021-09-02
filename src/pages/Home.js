import React from "react";
import "./Home.css";
import logo from "./roseapothlogo.png";
import basket from "./basket.png";
import account from "./account.png";
import shop from "./shop.png";

function Home() {
  return (
    <div className="logo">
      <a href="/" className="logoimg">
        <img src={logo} alt="Rose Apothecary" />
      </a>
      <div className="links">
        <a href="/shop" className="link">
          <img src={shop} alt="shop"></img>
        </a>

        <a href="/account" className="link">
          <img src={account} alt="account"></img>
        </a>
        <a href="/basket" className="link">
          <img src={basket} alt="basket"></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
