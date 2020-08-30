const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

mongoose.connect(
  "mongodb+srv://wonn:d72dadad@cluster0.j68pq.gcp.mongodb.net/ReactProjectTwitch?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("👏👏👏👏👏👏 Mongo DB Atlas has been connected! 👏👏👏👏👏👏");
});

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
