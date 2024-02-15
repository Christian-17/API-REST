
const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    username: {
        type: String,
        require: [true, 'el nombre de usuario es obligatorio']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model( 'Users', UsuariosSchema )