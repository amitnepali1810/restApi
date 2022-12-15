const Product = require("../models/product.model");

exports.getAllProducts = async (req, res, next) => {
    let products = await Product.find();
    res.status(200).json({
        products,
        msg: "all products fetched successfully"
    })
}

exports.getTestProducts = async(req, res, next) => {
    let products = await Product.find();
    res.status(200).json({
        products,
        msg: "product test successful"
    })
}