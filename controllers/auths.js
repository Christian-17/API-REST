const { response } = require("express")
const User  = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");


const comprobacionLogin = async(req, res = response) => {

    const { correo, contraseña } = req.body;

    try {

        const usuario = await User.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe usuario con el correo: ${correo }`
            })
        }
       
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario no registrado'
            })
        }

        const password = await User.findOne({contraseña})
        if (!password) {
            return res.status(400).json({
                msg: 'contraseña icorrecta'
            })
        }

        const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token
    })
    } catch (error) {
        
    }
}

module.exports = {
    comprobacionLogin
}