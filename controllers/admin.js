const Models = require("../models/product.js");
const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../", "data", "products.json");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const product = new Models(title, price, imageUrl, description);
  product.save();
  res.redirect("/");
};

/// ADMIN PRODUCT PAGE
exports.getAdminProductsPage = (req, res, next) => {
  async function getData() {
    const data = new Promise((resolve, reject) => {
      fs.readFile(p, (err, fileContent) => {
        resolve(JSON.parse(fileContent));
        if (err) {
          reject(console.log("failed to read: " + err));
        }
      });
    });
    console.log(data);
    return data;
  }
  getData();
  res.render("admin/products", {
    pageTitle: "Admin Products",
    path: "/admin/products",
    prods: getData(),
  });
};
