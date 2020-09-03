const express = require("express");
const Fruits = require("../models/fruits");

//espress router
const router = express.Router();
// get a list of fruits from the db
router.get("/fruits", async function (req, res, next) {
    Fruits.find().then(function(result){
        res.send(result);
        console.log(result);
        
    })
    // const result = await Fruits
    // .find();
    // res.send(result);
});

// add a new fruits to the db
// router.post("/fruits", function (req, res) {
//   console.log(req.body);
//   //sauvegarde les informations en base de donnee
//   Fruits.create(req.body).then(() => {
//     res.status(200).send("Fruit save ");
//   });
// });
router.post("/fruits", function (req, res, next) {
  Fruits.create(req.body)
    .then(function (fruit) {
      res.send(fruit);
    })
    .catch(next);
});

// update a fruits in the db
router.put("/fruits/:id", async function (req, res, next) {
  const result = await Fruits.findById(req.params.id);
  if (!result) {
    console.log("result : ", "No Document with this id");
    res.send("Result : No Document with this id");
    return;
  } else {
    Fruits.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function (fruit) {
        res.send(fruit);
      })
      .catch(next);
  }
});

// delete a fruits from the db
router.delete("/fruits/:id", async function (req, res, next) {
  Fruits.findByIdAndRemove({ _id: req.params.id })
    .then(function (fruit) {
      res.send(fruit);
    })
    .catch(next);
  // const result = await Courses.delete({ _id: req.params.id });
  // console.log("result :", result);
});

//export node module
module.exports = router;
