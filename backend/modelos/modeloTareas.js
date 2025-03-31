const mongoose = require('mongoose');
const{text} = require('express');
const{type} = require('mquery/lib/env');


const esquemaTareas = mongoose.Schema(
    {
        texto: {
            type:String,
            required: [true, 'Por favor ingrese un valor de texto']
        },
    usuario: {
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Usuario'
    },
},{
        timestamps:true
    }

);

module.exports = mongoose.model('Tarea', esquemaTareas);