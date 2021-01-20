const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config")
const bodyParser = require("body-parser")


const userRoute = require("./users/users.js");
const restaurantRoute = require("./restaurants/restaurants.js");
const reviewRoute = require("./reviews/reviews.js");

//MIDDLEWARE
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/restaurant", restaurantRoute);
app.use("/review", reviewRoute);




//CONNECT TO THE DATABASE
mongoose.connect("mongodb+srv://admin-vishal:root@cluster0.ilt7i.mongodb.net/foodreview?retryWrites=true&w=majority",     { useNewUrlParser: true, useUnifiedTopology: true }, 
    ()=>{
        console.log("connected to db");
    }
);




//LISTEN TO THE SERVER

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
