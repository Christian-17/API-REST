const { check } = require("express-validator");
const { Router } = require("express");

const { validarCampos } = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");
const { tareaExiste } = require("../middleware/validaciones")

const { tareaGet, tareaPost, tareaPut, tareaDelete } = require("../controllers/tareas");

const tarea =  Router();

tarea.get('/:usuarioId',[
    validarJWT,
    check('usuarioId', 'No existe una Usuario con ese id, (El id tiene que ser de Mongo)').isMongoId(),
    validarCampos
], tareaGet);

tarea.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    validarCampos
],tareaPost);

tarea.put('/:id', [
    validarJWT,
    check('nombre').custom(tareaExiste),
    check('id', 'No existe una tarea con ese id, (El id tiene que ser de Mongo)').isMongoId(),
    validarCampos
],tareaPut)

tarea.delete('/:id',[
    validarJWT,
    check('id', 'No existe Tarea con ese id, (El id tiene que ser de Mongo)').isMongoId(),
    validarCampos
],tareaDelete)




module.exports = tarea