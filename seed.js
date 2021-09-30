const { green, red } = require("chalk");
const Product = require("./server/db/models/product");
const db = require("./server/db/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const product = [
      {
        imgURL: "../images/candle.png",
        name: "Rose Candle",
        description:
          "A rosehip beeswax candle with hints of bergamot, sandalwood, and thyme. Bees sourced locally.",
        price: "45.00",
      },
      {
        imgURL: "../images/candle.png",
        name: "Rose Candle",
        description:
          "A rosehip beeswax candle with hints of bergamot, sandalwood, and thyme. Bees sourced locally.",
        price: "45.00",
      },
      {
        imgURL: "../images/candle.png",
        name: "Rose Candle",
        description:
          "A rosehip beeswax candle with hints of bergamot, sandalwood, and thyme. Bees sourced locally.",
        price: "45.00",
      },
    ];
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
