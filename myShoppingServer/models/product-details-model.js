const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productData = new Schema({
    productName     : String,
    productMrp      : Number, 
    productPrice    : Number, 
    productStar     :  Number,
    productQuantity : Number, 
    productImage    : String,
    productType     : String
});
const productDetailsModel = mongoose.model('productDetails', productData);
module.exports = productDetailsModel;