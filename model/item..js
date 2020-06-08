const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = {
    name:{
        type: String,
        require: true
    },

    data:{
        type:Date,
        default:Date.now
    }
}

const item = mongoose.model('item',ItemSchema);
module.exports = item;