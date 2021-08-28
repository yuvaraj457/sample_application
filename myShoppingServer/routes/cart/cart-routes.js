const jwt = require('jsonwebtoken');

const userDetailsModel = require('../../models/user-details-model');
require('dotenv').config()

const addToCart = (req, res) => {
    const token = req.header('auth-token');
    const productId = req.query.productId;
    const productPrice = req.query.productPrice;
    const productName = req.query.productName;
    const productImage = req.query.productImage;

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);

        userDetailsModel.updateMany(
            { _id: user._id },
            {
                $addToSet: {

                    cartProducts: productId,

                    cartTotalPrice: {
                        productId,
                        productName,
                        productImage,
                        productPrice: Number(productPrice),
                        productQuantity: 1
                    }
                }
            }
        ).then(() => res.status(201).send('product added successfully'))
            .catch(() => res.status(403).send('Unable to add product'));
    }
    catch (err) {
        return res.status(401).send("Invalid Token");
    }
}

const removeFromCart = (req, res) => {
    const token = req.header('auth-token');
    const productId = req.query.productId;

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        userDetailsModel.updateMany(
            { _id: user._id },
            {
                $pull:
                {
                    cartProducts: productId,
                    cartTotalPrice: { productId }
                },

            }
        ).then((response) => res.status(204).send(response))
            .catch(() => res.status(403).send('Unable to remove product'));
    }

    catch {
        return res.status(401).send("Invalid Token");
    }
}

const cartTotalPrice = (req, res) => {
    const token = req.header('auth-token');
    const productId = req.query.productId;
    const productQuantity = req.query.productQuantity;

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        userDetailsModel.findOneAndUpdate(
            { _id: user._id, cartTotalPrice: { $elemMatch: { productId } } },
            {
                $set: { "cartTotalPrice.$.productQuantity": Number(productQuantity) }
            }).then((response) => res.status(200).send(response))
            .catch(() => res.status(403).send('Unable to change product quantity'));
    }
    catch {
        return res.status(401).send("Invalid Token");
    }
}


module.exports = { addToCart, removeFromCart, cartTotalPrice };