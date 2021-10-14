const { green, red } = require("chalk");
const Product = require("./server/db/models/product");
const CartOrder = require("./server/db/models/cartOrder");
const CartItem = require("./server/db/models/cartItem");
const User = require("./server/db/models/user");
const db = require("./server/db/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const products = [
      {
        imgURL: "../images/candle.png",
        name: "Rose Candle",
        description:
          "A rosehip beeswax candle with hints of bergamot, sandalwood, and thyme. Bees sourced locally.",
        price: 45.0,
      },
      {
        imgURL: "../images/perfume.png",
        name: "Rose Perfume",
        description:
          "A subtle rosewater scent that compliments the wearer's natural musk",
        price: 60.0,
      },
      {
        imgURL: "../images/bodymilk.png",
        name: "Rose Bodymilk",
        description:
          "A powerful moisturizer that is absorbed into the skin instantly - no oily hands here. Vitamins A & E nourish and renew the skin.",
        price: 20.0,
      },
      {
        imgURL: "../images/bodymilk.png",
        name: "Unscented Bodymilk",
        description:
          "A powerful moisturizer that is absorbed into the skin instantly - no oily hands here. Vitamins A & E nourish and renew the skin.",
        price: 20.0,
      },
      {
        imgURL: "../images/barsoap.png",
        name: "Rose Bar Soap",
        description:
          "A unique, goat milk-based formula melts effortlessly into the skin, locking in moisture and the rich floral tones of our Heirloom Rose scent",
        price: 15.0,
      },
      {
        imgURL: "../images/bodycream.png",
        name: "Rose Whipped Body Cream",
        description:
          "This velvety goat-milk formula soaks right into the skin, leaving a dusting of our irresistible Heirloom Rose scent — a floral arrangement of rose, jasmine, and neroli blossom complemented by geranium and sandalwood",
        price: 38.0,
      },
      {
        imgURL: "../images/lipbalm.png",
        name: "Rose Lip Balm",
        description:
          "Delicately scented with our cult-favorite fragrance, Heirloom Rose, this hydrating balm not only seals in moisture but also seals your lips with a kiss of floral tones.",
        price: 8.0,
      },
    ];
    const cartOrders = [
      { submitted: false, orderDate: Date.now(), totalPrice: 0 },
      { submitted: false, orderDate: Date.now(), totalPrice: 0 },
      { submitted: false, orderDate: Date.now(), totalPrice: 0 },
      { submitted: false, orderDate: Date.now(), totalPrice: 0 },
    ];

    const cartItems = [{ quantity: 1 }, { quantity: 1 }, { quantity: 1 }];
    const users = [
      {
        email: "ysh@gmail.com",
        firstName: "Test",
        lastName: "McTestface",
        password: "123",
      },
      {
        email: "tuv@gmail.com",
        firstName: "Tuv",
        lastName: "Vut",
        password: "anagram",
      },
      {
        email: "win@gmail.com",
        firstName: "Winifred",
        lastName: "Winns",
        password: "allido",
      },
    ];
    User.bulkCreate(users);
    CartItem.bulkCreate(cartItems);
    CartOrder.bulkCreate(cartOrders);
    Product.bulkCreate(products);
  } catch (error) {
    console.log(red(error));
  }
};
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding Success!");
      db.close();
    })
    .catch((err) => {
      console.error(red("Seeding Unsuccessful"));
      console.error(err);
      db.close();
    });
  console.log("Seeding Complete");
}
