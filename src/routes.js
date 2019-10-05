const express = require("express");

const routes = express.Router();

routes.post("/users", (req, res) => {
  return res.json({ msg: "hello world" });
});

module.exports = routes;
