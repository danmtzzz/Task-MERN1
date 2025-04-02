const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Usuario = require('../modelos/modeloUsuario');

const protects = asyncHandler(async(req,res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith
        ("Bearer")) {
            try {
                token = req.headers.authorization.split(' ')(1);
                const decoded = jwt.verify(token.process.env.JWT_SECRETO);
                Request.usuario = await Usuario.findById(decoded.id).select('-password');
                next();
            }catch(error){
                console.log(error);
                res.status(401);
                throw new Error('No cuenta con autorización');
            }
        }


    if(!token){
        res.status(401);
        throw new Error('No autorizado, no existe token');
    }
});

module.exports = {protects};