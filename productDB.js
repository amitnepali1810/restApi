const connectDatabase = require("./db/database");
require("dotenv").config();
const Product = require("./models/product.model");

const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDatabase(process.env.DB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();