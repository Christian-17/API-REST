const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

const router = require('../routes/usuario');
const tarea = require('../routes/tarea');
const papelera = require('../routes/papelera');
const login = require('../routes/auth');



class Server {

    constructor () {
        this.app = express()
        this.port = process.env.PORT
        this.path = {
            user: '/api/usuarios',
            auth: '/api/login',
            tasks: '/api/tareas/',
            paperBin: '/api/papelera/'
        }

        this.conectarDB();

        this.middleware();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middleware() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public'))
    }

    routes() {
        this.app.use( this.path.user, router );
        this.app.use( this.path.auth, login )
        this.app.use( this.path.tasks, tarea );
        this.app.use( this.path.paperBin, papelera );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }


}

module.exports = Server