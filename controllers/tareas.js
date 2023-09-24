const { response, query } = require("express");
const Tarea = require('../models/tarea');


const tareaGet = async(req, res = response, query) => {

  const {usuarioId} = req.params;

  const tarea = await Tarea.find({
    estado: true,
    usuario: usuarioId
});

  res.json({
      tarea
  });
}

const tareaPost = async( req, res = response ) => {

    const { nombre, descripcion } = req.body

    const data = { nombre, descripcion, usuario: req.usuario._id };

    const tarea = new Tarea(data)

    await tarea.save(data)

    res.json({
        tarea
    })
}

const tareaPut = async(req, res = response) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;
  
    const tarea = await Tarea.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );
  
    res.json({
      tarea
    })
  }

  const tareaDelete = async(req, res = response) => {

    const { id } = req.params

    const tarea = await Tarea.findByIdAndUpdate(id, { estado:false });

    res.json({
      tarea
    })

  }

module.exports = {
    tareaGet,
    tareaPost,
    tareaPut,
    tareaDelete
}