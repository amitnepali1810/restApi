const Product = require("../models/product.model");

exports.getAllProducts = async (req, res, next) => {

    const { company, name, featured, sort } = req.query;
    const objectQuery = {};

    if(company){
        objectQuery.company = company;
    }

    if(name){
        objectQuery.name = { $regex: name, $options: "i"};
    }

    if(featured){
        objectQuery.featured = featured;
    }

    let apiData = Product.find(objectQuery);

    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    console.log(objectQuery);
    

    let products = await apiData;

    res.status(200).json({
        products,
        msg: "all products fetched successfully"
    })
}

exports.getTestProducts = async(req, res, next) => {
    let products = await Product.find(req.query);
    res.status(200).json({
        products,
        msg: "product test successfully"
    })
}