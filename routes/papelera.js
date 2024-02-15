const { check } = require("express-validator");
const { Router } = require("express");

const { validarCampos } = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");
const {
  tareaGetPapelera,
  tareaPutPapelera,
  tareaDeletePapelera,
  tareaVaciarPapelera,
} = require("../controllers/papeleras");

const papelera = Router();

papelera.get("/", [validarJWT, validarCampos], tareaGetPapelera);

papelera.put(
  "/:id",
  [
    validarJWT,
    check("id", "EL id tiene que ser obligatorio").isMongoId(),
    validarCampos,
  ],
  tareaPutPapelera
);

papelera.delete(
  "/:id",
  [
    validarJWT,
    check("id", "EL id tiene que ser obligatorio").isMongoId(),
    validarCampos,
  ],
  tareaDeletePapelera
);

papelera.delete("/", [validarJWT, validarCampos], tareaVaciarPapelera);

module.exports = papelera;
