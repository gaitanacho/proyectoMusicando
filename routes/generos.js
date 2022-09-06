const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const db = require("../database/models");


// INDEX /api/generos
router.get("/", (req, res) => {
    db.Generos.findAll(req.params.id).then((generos) => {
      res.json(generos);
    });
  });
  

  module.exports = router;
