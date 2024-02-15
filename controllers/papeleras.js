const { response, query } = require("express");
const Tarea = require("../models/tarea");

const tareaGetPapelera = async (req, res = response) => {
  const usuarioId = req.usuario?._id;

  const tarea = await Tarea.find({
    estado: false,
    usuario: usuarioId,
  });

  res.json({
    tarea,
  });
};

const tareaPutPapelera = async (req, res = response) => {
  const { id } = req.params;

  const tarea = await Tarea.findByIdAndUpdate(id, { estado: true });

  res.json({
    tarea,
  });
};

const tareaDeletePapelera = async (req, res = response) => {
  const { id } = req.params;

  const tarea = await Tarea.deleteOne({ _id: id });

  res.json({
    tarea,
  });
};

const tareaVaciarPapelera = async (req, res = response) => {
  const usuarioId = req.usuario?._id;

  const tarea = await Tarea.deleteMany({
    estado: false,
    usuario: usuarioId,
  });

  res.json({
    tarea,
  });
};

module.exports = {
  tareaGetPapelera,
  tareaPutPapelera,
  tareaDeletePapelera,
  tareaVaciarPapelera,
};
