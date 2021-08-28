const multer = require('multer');
const path = require('path');
const fs = require('fs');

const productDetailsModel = require('../../models/product-details-model');


const product = (req, res, next) => {
    productDetailsModel.find({})
        .then((response) => res.status(200).send(response))
        .catch((error) => console.log(error));
}

//PRODUCTS

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.fieldname + path.extname(file.originalname));
    }
})

//Uploads Product images to Multer

const upload = multer({ storage });

const productUpload = (req, res) => {
    const { productName, productMrp, productPrice, productStar, productQuantity, productType } = req.body;
    const data = productDetailsModel({
        productName,
        productMrp,
        productPrice,
        productStar,
        productQuantity,
        productType
    });
    data.productImage = req.file.filename;
    data.save()
        .then(() => res.status(201).send('product uploaded successfully'))
        .catch((error) => console.log(error));
}

const productUpdate = async (req, res) => {
    const { _id, productName, productMrp, productPrice, productStar, productQuantity, productType } = req.body;
    const update = {
        productName,
        productMrp,
        productPrice,
        productStar,
        productQuantity,
        productType
    };
    update.productImage = req.file.filename;
    await productDetailsModel.findOneAndUpdate({ _id }, update, { new: true });
    res.status(200).send('Product updated successfully');
}

const productDelete = (req, res) => {
    const { _id } = req.body;
    productDetailsModel.findOneAndDelete({ _id })
        .then(() => res.status(204).send('Product Deleted Successfully'))
        .catch((err) => console.log(err));
}


const productDetails = (req, res) => {
    const productId = req.query.productId;

    try {
        productDetailsModel.findOne({ _id: productId })
            .then((response) => res.status(200).send(response))
            .catch((error) => conole.log(error));
    }
    catch {
        return res.status(401).send("Invalid Token");
    }
}

module.exports = { product, upload, productUpload, productUpdate, productDelete, productDetails };