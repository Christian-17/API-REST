const { response } = require("express")
const bcryptjs = require('bcryptjs')
const User  = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");


const comprobacionLogin = async(req, res = response) => {

    const { username, password } = req.body;

    try {

        const usuario = await User.findOne({username});
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe usuario: ${username}`
            })
        }
       
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario no registrado'
            })
        }

        const password1 = bcryptjs.compareSync(password, usuario.password)
        if (!password1) {
            return res.status(400).json({
                msg: 'contraseña icorrecta'
            })
        }

        const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token,
        expiresIn: 3 + 'h'
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'hable con el administrador'
        })
    }
}

module.exports = {
    comprobacionLogin
}