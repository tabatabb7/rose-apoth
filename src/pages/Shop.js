import React from "react";
import "./Shop.css";

const product = [
  {
    id: 1,
    imgURL: "../images/candle.png",
    name: "Rose Candle",
    description:
      "A rosehip beeswax candle with hints of bergamot, sandalwood, and thyme. Bees sourced locally.",
    price: "45.00",
  },
  {
    id: 2,
    imgURL: "../images/perfume.png",
    name: "Rose Perfume",
    description:
      "A subtle rosewater scent that compliments the wearer's natural musk",
    price: "60.00",
  },
  {
    id: 3,
    imgURL: "../images/bodymilk.png",
    name: "Rose Bodymilk",
    description:
      "A powerful moisturizer that is absorbed into the skin instantly - no oily hands here. Vitamins A & E nourish and renew the skin.",
    price: "20.00",
  },
  {
    id: 4,
    imgURL: "../images/bodymilk.png",
    name: "Unscented Bodymilk",
    description:
      "A powerful moisturizer that is absorbed into the skin instantly - no oily hands here. Vitamins A & E nourish and renew the skin.",
    price: "20.00",
  },
];
function Shop() {
  return (
    <div id="productlisting">
      <div className="row">
        {product.map((product) => (
          <div key={product.id} className="column">
            <a href={`products/${product.id}`}>
              <img src={product.imgURL} alt={`${product.name}`}></img>
            </a>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
