const express = require("express");
const app = express();
const cors = require("cors");

const placesController = require("./controllers/placesController.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to our travel app</h1>");
})

app.use("/places", placesController);

module.exports = app;