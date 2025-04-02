const DotEnv = require('dotenv').config();
const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleWare');
const puerto = process.env.PUERTO || 5000;
const DBconexion = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

DBconexion();

app.use('/api/tareas', require('./rutas/rutasTareas'));
app.use('/api/usuarios', require('./rutas/rutasUsuario'));
//app.get('/api/tareas', (req,res) => {
//res.status(200).json({mensaje: 'Obtener todas las tareas'});
//});

app.use(errorHandler);

app.listen(puerto, () => console.log(`Servidor escuchando en ${puerto}`));
