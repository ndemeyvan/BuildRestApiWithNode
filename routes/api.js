const express = require("express");
const Fruits = require("../models/fruits");

//espress router
const router = express.Router();
// get a list of fruits from the db
router.get("/fruits", function (req, res, next) {
  res.send({ type: "GET" });
});

// add a new fruits to the db
// router.post("/fruits", function (req, res) {
//   console.log(req.body);
//   //sauvegarde les informations en base de donnee
//   Fruits.create(req.body).then(() => {
//     res.status(200).send("Fruit save ");
//   });
// });
router.post('/fruits', function(req, res, next){
    Fruits.create(req.body).then(function(fruit){
        res.send(fruit);
    }).catch(next);
});

// update a fruits in the db
router.put("/fruits/:id", function (req, res, next) {
  res.send({ type: "PUT" });
});

// delete a fruits from the db
router.delete("/fruits/:id", function (req, res, next) {
  res.send({ type: "DELETE" });
});

//export node module
module.exports = router;
