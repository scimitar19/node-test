const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(name, price, imageUrl, description) {
    this.title = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    getProductsFromFile((item) => {
      item.push(this);
      fs.writeFile(p, JSON.stringify(item), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
