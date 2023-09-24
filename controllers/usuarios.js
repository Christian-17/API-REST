const { request, response } = require('express');
const User = require('../models/usuario')

const usuarioGet = async(req = request, res = response) => {

  const usuarios = await User.find({estado: true});

    res.json({
        usuarios
    })
  }

  const usuarioPost = async(req, res = response) => {
  
    const {nombre, correo, contraseña} = req.body;
    const usuario = new User({nombre, correo, contraseña});
    
    await usuario.save()
    
  
    res.json({
      usuario
    });
  }

  const usuarioPut = async(req, res = response) => {

    const { id } = req.params;
    const { nombre, correo, contraseña } = req.body;
  
    const usuario = await User.findByIdAndUpdate(
      id,
      { nombre, correo, contraseña },
      { new: true }
    );
  
    res.json({
      usuario
    })
  }

  const usuarioDelete = async(req, res = response) => {

    const { id } = req.params

    const usuario = await User.findByIdAndUpdate(id, { estado:false });

    res.json({
      usuario
    })

  }

  module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
  }