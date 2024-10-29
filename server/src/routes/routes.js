const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Hello World from API!");
  });

  //subroutes

  return router;
};
