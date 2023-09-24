const { Router } = require("express");
const { check } = require("express-validator");

const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete } = require("../controllers/usuarios");
const { validarCampos } = require("../middleware/validar-campos");
const { emailExiste} = require("../middleware/validaciones");

const router = Router();

router.get('/', usuarioGet);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'No es un correo valido').isEmail(),
    check('correo').custom(emailExiste),
    check('contraseña', 'la contraseña es obligatoria y debe de tener mas de 8 carateres').isLength({min:8}),
    validarCampos
], usuarioPost)

router.put('/:id', [
    check('id', 'No existe usuario con ese id, (El id tiene que ser de Mongo)').isMongoId(),
    validarCampos
], usuarioPut)

router.delete('/:id', [
    check('id', 'No existe usuario con ese id, (El id tiene que ser de Mongo)').isMongoId(),
    validarCampos
],usuarioDelete)

module.exports = router