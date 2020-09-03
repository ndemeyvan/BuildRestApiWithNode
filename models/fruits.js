const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fruitSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    taste: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    price : {
        type:Number,
        required:true,
    }

})
const fruit = mongoose.model('fruits', fruitSchema);

module.exports = fruit;