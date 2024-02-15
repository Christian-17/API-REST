const { request, response } = require('express');
const bcryptjs = require('bcryptjs')
const User = require('../models/usuario')

const usuarioGet = async(req = request, res = response) => {

  const usuarios = await User.find({estado: true});

    res.json({
        usuarios
    })
  }

  const usuarioPost = async(req, res = response) => {
  
    const {username, password} = req.body;
    const usuario = new User({username, password});

     const salt = bcryptjs.genSaltSync();
     usuario.password = bcryptjs.hashSync( password, salt );
    
    await usuario.save()
    
  
    res.json({
      usuario
    });
  }

  const usuarioPut = async(req, res = response) => {

    const { id } = req.params;
    const { username, password } = req.body;

    if ( password ) {
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync( password, salt );
  
  }
  
    const usuario = await User.findByIdAndUpdate(
      id,
      { username, password },
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