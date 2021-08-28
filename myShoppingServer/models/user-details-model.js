const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userData = new Schema({
    userName     : String,
    userEmail    : String,
    userPassword : String,
    cartProducts : [{type:String, dropDups: true}],
    cartTotalPrice : [],
    billingAddress : []
});
const userDetailsModel = mongoose.model('userDetails',userData);
module.exports = userDetailsModel;