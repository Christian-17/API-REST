
const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'el nombre es obligatorio']
    },
    correo: {
        type: String,
        require: [true, 'el correo es obligatorio'],
        unique: true
    },
    contraseña: {
        type: String,
        require: [true, 'La contraseña es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model( 'Users', UsuariosSchema )