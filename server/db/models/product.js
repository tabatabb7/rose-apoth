const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },

  description: {
    type: Sequelize.TEXT,
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "/images/default-product.png",
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
