const express = require("express");
const router = express.Router();

//Import auth models
const AuthController = require("../controllers/authController");

module.exports = () => {
  // AUTH: TEST (GET ALL) ROUTE
  router.get("/users", AuthController.listUsers);

  // AUTH: REGISTER (POST) Route
  router.post("/register", AuthController.register);

  // AUTH: LOGIN (POST) Route
  router.post("/login", AuthController.login);

  return router;
};
