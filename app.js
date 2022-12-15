const express = require("express");
const app = express();
require("dotenv").config();

// database
const connectDatabase = require("./db/database");

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product.routes");

app.get("/", (req, res) => {
    res.send("hello world");
})


// router
app.use("/api/products", product_routes);



const start = async() =>{
    try {
        await connectDatabase(process.env.DB_URI);
        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT} Successfully...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();