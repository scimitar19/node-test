const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop.js");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getUserProducts);

router.get("/cart", shopController.getCartProduct);

router.get("/checkout", shopController.getCheckoutProducts);

module.exports = router;
