import React from "react";
import candle from "../images/candle.png";
import perfume from "../images/perfume.png";
import bodymilk from "../images/bodymilk.png";
import { useParams } from "react-router";

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
];

function Product() {
  const { id } = useParams();

  return (
    <div className="productWrapper">
      {product
        .filter((product) => product.id === id)
        .map((filterProduct) => (
          <div key={filterProduct.id} className="productDiv">
            <img src={filterProduct.imgURL} alt={filterProduct.name}></img>
            <p className="description">{filterProduct.description}</p>
            <p>{filterProduct.price}</p>
          </div>
        ))}
    </div>
  );
}
export default Product;