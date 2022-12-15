const express = require("express");
const { getAllProducts, getTestProducts } = require("../controllers/product.controller");
const router = express.Router();


router.route("/").get(getAllProducts)
router.route("/testing").get(getTestProducts)

module.exports = router;