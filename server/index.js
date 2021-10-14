const express = require("express");
const db = require("./db/db");

const apiRouter = require("./api");

const PORT = process.env.PORT || 3000;
const app = express();
module.exports = app;

app.use("/api", apiRouter);

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Server is listening on port:${PORT}`)
  );
};

startListening();
