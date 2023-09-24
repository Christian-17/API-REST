
const { Schema, model } = require('mongoose');

const TareasSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'el nombre es obligatorio']
    },
    descripcion: {
        type: String,
        require: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// UsuariosSchema.methods.toJSON = function() {
//     const { __v } = this.toObject();
// }



module.exports = model( 'Tarea', TareasSchema )