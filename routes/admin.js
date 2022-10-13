const path = require("path");
// const productsController = require("../controllers/products.js");
const adminController = require("../controllers/admin.js");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/add-product => ADMIN GET PAGE
router.get("/products", adminController.getAdminProductsPage);

module.exports = router;
