const Models = require("../models/product.js");

exports.getUserProducts = (req, res, next) => {
  Models.fetchAll((item) => {
    res.render("shop/product-list.ejs", {
      prods: item,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Models.fetchAll((item) => {
    res.render("shop/index", {
      prods: item,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCartProduct = (req, res, next) => {
  res.render("shop/cart.ejs", {
    cart: "some items",
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getProductDetails = (req, res, next) => {
  const product = new Models(req.body.title);
  res.render("shop/product-details.ejs", {
    prods: product,
    pageTitle: "Product Detail",
    path: "/products",
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

/// COSTUMER/CHECKOUT PAGE
exports.getCheckoutProducts = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

// exports.productsArray = Models.fetchAll(() => {});
