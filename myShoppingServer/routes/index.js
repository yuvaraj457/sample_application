var express = require('express');
var router = express.Router();

const {product,  upload, productUpload, productUpdate, productDelete, productDetails} = require('./products/product-routes');
const signup = require('./user/signup-routes');
const login = require('./user/login-routes');
const user = require('./user/user-routes');
const {cartTotalPrice, removeFromCart, addToCart }  = require('./cart/cart-routes');
const {checkOut, getBillingAddress} = require('./user/check-out-routes');
const {removeBillingAddress} = require('./user/check-out-routes');

router.get('/products',product);

router.post('/signup',signup);

router.post('/login',login);

router.post('/product-upload',upload.single('productImage'), productUpload);

router.post('/product-update',upload.single('productImage'), productUpdate);

router.delete('/product-delete',upload.none(), productDelete);

router.get('/user',user);

router.get('/add-to-cart', addToCart);

router.delete('/remove-from-cart', removeFromCart);

router.get('/product-details', productDetails);

router.get('/cart-total-price', cartTotalPrice);

router.post('/check-out', checkOut);

router.get('/get-billing-address', getBillingAddress);

router.delete('/remove-billing-address', removeBillingAddress);

module.exports = router;
