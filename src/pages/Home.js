import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="logo">
      <a href="/" className="logoimg">
        <img src="/images/roseapothlogo.png" alt="Rose Apothecary" />
      </a>
      <div className="links">
        <a href="/shop" className="link">
          <img src="/images/shop.png" alt="shop"></img>
        </a>

        <a href="/account" className="link">
          <img src="/images/account.png" alt="account"></img>
        </a>
        <a href="/basket" className="link">
          <img src="/images/basket.png" alt="basket"></img>
        </a>
      </div>
    </div>
  );
}

export default Home;
