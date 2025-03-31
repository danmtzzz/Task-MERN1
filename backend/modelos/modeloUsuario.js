const mongoose = require('mongoose');
const{text} = require('express');
const{type} = require('mquery/lib/env');

const esquemaUsuario = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true,'No se ha proporcionado el nombre'],
        },
        email:{
            type: String,
            required: [true, 'No se ha proporcionado el email'],
        },
        contraseña: {
            type: String,
            required: [true, 'No se proporcionó la contraseña'],
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model('Usuario', esquemaUsuario);
