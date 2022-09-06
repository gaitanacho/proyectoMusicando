const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const db = require("../database/models");

// INDEX /api/generos
router.get("./", (req, res) => {
  db.Genero.findAll().then((generos) => {
    res.json(generos);
  });
});

module.exports = router;
