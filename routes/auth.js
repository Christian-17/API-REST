const { Router } = require("express");
const { comprobacionLogin } = require("../controllers/auths");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const { validarContraseña } = require("../middleware/validaciones");


const login = Router();

login.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('contraseña', 'la contraseña es obligatoria y debe de tener mas de 8 carateres').isLength({min:8}),
    validarCampos
],comprobacionLogin)

module.exports = login