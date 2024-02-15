const { Router } = require("express");
const { comprobacionLogin } = require("../controllers/auths");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");


const login = Router();

login.post('/',[
    check('username', 'El usuario es obligatorio'),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validarCampos
],comprobacionLogin)

module.exports = login