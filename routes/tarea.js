const { check } = require("express-validator");
const { Router } = require("express");

const { validarCampos } = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");

const {
  tareaGet,
  tareaPost,
  tareaPut,
  tareaDelete,
  tareaCompleted,
} = require("../controllers/tareas");

const tarea = Router();

tarea.get("/", [validarJWT, validarCampos], tareaGet);

tarea.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  tareaPost
);

tarea.put(
  "/:id",
  [
    validarJWT,
    check("id", "EL id tiene que ser obligatorio").isMongoId(),
    validarCampos,
  ],
  tareaPut
);

tarea.delete(
  "/:id",
  [
    validarJWT,
    check("id", "EL id tiene que ser obligatorio").isMongoId(),
    validarCampos,
  ],
  tareaDelete
);
tarea.put(
  "/completed/:id",
  [
    validarJWT,
    check("id", "EL id tiene que ser obligatorio").isMongoId(),
    validarCampos,
  ],
  tareaCompleted
);

module.exports = tarea;
