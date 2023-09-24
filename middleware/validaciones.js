const Tarea = require('../models/tarea');
const User = require('../models/usuario')


const emailExiste = async( correo = '') => {
   
    const existeEmail = await User.findOne({ correo });
    if ( existeEmail ) {
      throw new Error(`El correo: ${ correo }, ya existe`);
    }
}

const tareaExiste = async( nombre = '') => {
   
  const existeTarea = await Tarea.findOne({ nombre });
  if ( existeTarea ) {
    throw new Error(`La tarea: ${ nombre }, ya existe`);
  }
}

const existeTareaPorId = async( id ) => {
   
  const existeTarea = await Tarea.findById( id );
  if ( !existeTarea ) {
    throw new Error(`El id no existe ${ id }`);
  }
}

module.exports = {
    emailExiste,
    tareaExiste,
    existeTareaPorId
}