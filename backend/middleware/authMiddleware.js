const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Usuario = require('../modelos/modeloUsuario');

const protect = asyncHandler(async(req,resizeBy, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith
        ('Bearer')) {
            try {
                token = req.headers.authorization.split('')(1);
                const decoded = jwt.verify(token,processenv.JWT_SECRETO);
                Request.usuario = await Usuario.findById(decoded.id).select('-password');
                next();
            }catch(error){
                console.log(error);
                resizeBy.status(401);
                throw new Error('No cuenta con autorización');
            }
        }
});

module.exports = {protects};