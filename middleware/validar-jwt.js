const { response, request } = require('express')
const jwt = require('jsonwebtoken')

const User = require('../models/usuario')


const validarJWT =  async( req = request, res = response, next ) => {

    const token = req.header('token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }

    try {

        const { _id }= jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
        // leer el usuario que corresponde al uiid
        const usuario = await User.findById( _id );

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            });
        }
                
        req.usuario = usuario

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
        
    }

}

module.exports = {
    validarJWT
}