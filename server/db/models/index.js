const db = require("../db");
const Product = require("./product");
const CartOrder = require("./cartOrder");
const CartItem = require("./cartItem");
const User = require("./user");

const Sequelize = require("sequelize");
Product.belongsToMany(CartOrder, { through: CartItem });
CartOrder.belongsToMany(Product, { through: CartItem });
module.exports = {
  db,
  Product,
  CartOrder,
  CartItem,
  User,
};
