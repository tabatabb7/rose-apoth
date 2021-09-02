import React from "react";
import "./Shop.css";
import candle from "./candle.png";
import perfume from "./perfume.png";
import bodymilk from "./bodymilk.png";
function Shop() {
  return (
    <div id="productlisting">
      <div class="row">
        <div class="column">
          <a href="/products/1">
            <img src={candle} alt="scentedcandle"></img>
          </a>
          <p>Scented Candle</p>
        </div>
        <div class="column">
          <a href="/products/2">
            <img src={perfume} alt="perfume"></img>
          </a>
          <p>perfume</p>
        </div>
        <div class="column">
          <a href="/products/3">
            <img src={bodymilk} alt="bodymilk"></img>
          </a>
          <p>bodymilk</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
