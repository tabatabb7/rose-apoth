import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Product.css";

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

function Product() {
  const { id } = useParams();
  const [shoppingCart, setShoppingCart] = useState({ cart: [] });
  const addProduct = (id) => {
    setShoppingCart(id);
  };
  return (
    <div className="productWrapper">
      {product
        .filter((product) => product.id === parseInt(id))
        .map((filterProduct) => (
          <div key={filterProduct.id} className="productDiv">
            <div className="flex imageDiv">
              <img src={filterProduct.imgURL} alt={filterProduct.name}></img>
            </div>
            <div className="flex descriptionDiv">
              <p className="description">{filterProduct.description}</p>
              <p className="price">{filterProduct.price}</p>
              <p onClick={addProduct} className="cartButton">
                Add to Cart
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Product;
