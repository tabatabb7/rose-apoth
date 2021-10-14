const Sequelize = require("sequelize");
const db = require("../db");

const CartItem = db.define("cartitem", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      notEmpty: true,
    },
  },
});

module.exports = CartItem;
