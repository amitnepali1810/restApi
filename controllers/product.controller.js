const Product = require("../models/product.model");

exports.getAllProducts = async (req, res, next) => {

    const { company, name, featured,sort, select } = req.query;
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

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }


    // pagination system  
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;
    
    apiData = apiData.skip(skip).limit(limit);

    console.log(objectQuery);
    

    let products = await apiData;

    res.status(200).json({
        products,
        productsCount : products.length,
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