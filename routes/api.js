const express = require("express");
//espress router
const router = express.Router();
// get a list of fruits from the db
router.get('/fruits', function(req, res){
    res.send({type: 'GET'});
});

// add a new fruits to the db
router.post('/fruits', function(req, res){
    res.send({type: 'POST'});
});

// update a fruits in the db
router.put('/fruits/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a fruits from the db
router.delete('/fruits/:id', function(req, res){
    res.send({type: 'DELETE'});
});

//export node module 
exports = router;