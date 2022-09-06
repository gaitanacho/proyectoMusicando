const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const db = require("../database/models");

// INDEX /api/canciones
router.get("/", (req, res) => {
  db.Canciones.findAll().then((canciones) => {
    res.json(canciones);
  });
});

// CREATE
router.post("/", (req, res) => {
  db.Canciones.create({
    id: req.body.id,
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    genero_id: req.body.genero_id,
    album_id: req.body.album_id,
    artista_id: req.body.artista_id,
  }).then((cancion) => {
    res.json(cancion);
  });
});

// READ /api/canciones/:id
router.get("/:id", (req, res) => {
  db.Canciones.findByPk(req.params.id).then((canciones) => {
    res.json(canciones);
  });
});

// UPDATE /api/canciones/:id
router.put("/:id", (req, res) => {
  db.Canciones.update(
    {
      id: req.body.id,
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      genero_id: req.body.genero_id,
      album_id: req.body.album_id,
      artista_id: req.body.artista_id, // AGREGAR
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((canciones) => {
    res.json(canciones);
  });
});

// DELETE /api/canciones/:id
router.delete("/:id", (req, res) => {
  db.Canciones.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
});


module.exports = router;
