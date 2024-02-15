const User = require("../models/usuario");

const usuarioExiste = async (username = "") => {
  const usuarioTarea = await User.findOne({ username });
  if (usuarioTarea) {
    throw new Error(`Ya existe usuario: ${username}`);
  }
};

const existeTareaPorId = async (id) => {
  const existeTarea = await Tarea.findById(id);
  if (!existeTarea) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = {
  usuarioExiste,
  existeTareaPorId,
};
