const express = require("express");
const router = express.Router();

//import modules
const productController = require("../controllers/productController");

module.exports = () => {
  // GET ALL Products
  router.get("/", productController.getAllProducts);

  return router;
};
