const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../modelos/modeloUsuario');

const registrarUsuario = asyncHandler(async (req,res)=>{
    const {nombre, email, contraseña} = req.body;

    if(! nombre || ! email || ! contraseña){
        res.status(400);
        throw new Error('Falta al menos uno de los campos');
    }
    else{
    const usuarioExiste = await Usuario.findOne({email});
    }

    if(usuarioExiste){
        res.status(400);
        throw new Error('El usuario ya existe');
    }
    else{

  
    const salt = await bcrypt.genSalt(10);
    const ContraseñaHasheada = await bcrypt.hash(contraseña, salt);
    const usuario = await Usuario.create({
        nombre,
        email,
        contraseña: ContraseñaHasheada
    });
}
     
    if (usuario){
        res.status(201).json({_id:usuario.id, nombre:usuario.nombre,
            email:usuario.email, token:generarJWTtoken(usuario._id)});
        
    }else{

        res.status(400);
        throw new Error('Datos de usuario no válidos');
    }
});

const generarJWT = (id) => {
    return jwt.sign({id},process.env.SECRETO_JWT,{
        expiresIn:'5d'});
};

const loginUsuario = asyncHandler(async(req,res) =>{
    const {email, contraseña} = req.body;
    const usuario = await Usuario.findOne({email});
    if(usuario && (await bcrypt.compare(contraseña, usuario.contraseña))) {
        res.json({_id: usuario.id, nombre:usuario.nombre, email:usuario.email,
            token: generarJWTtoken(usuario._id)
        });
    }else{
        res.status(400);
        throw new Error('Datos no válidos');
    }
    });

const getUsuarioActual = asyncHandler(async(req,res)=>{
    res.json({mensaje : 'Datos del usuario actual'});
});

const generarJWTtoken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRETO,{
        expiresIn:'5d'});
};

module.exports = {registrarUsuario, getUsuarioActual, loginUsuario}; 
