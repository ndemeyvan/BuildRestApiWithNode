const express = require("express");
const routes = require("./routes/api");
const mongoose = require("mongoose");
// const fruitsSchema = require('./models/fruits');

///initialiser express
const app = express();

// connect to mongodb
mongoose
  .connect(
    "mongodb://localhost/fruits",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("Conneced to Mongo Db... "))
  .catch((e) => console.log("Error :", e));

//get the json
app.use(express.json());

app.use("/api", routes);
// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

//listen for request
app.listen(4000, () => {
  console.log("server is running");
});
