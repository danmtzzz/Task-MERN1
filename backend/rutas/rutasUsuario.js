const express = require('express');
const router = express.Router();
const {registrarUsuario, getUsuarioActual, loginUsuario} = 
require('../controladores/controladorUsuario');

router.post('/, registrarUsuario');
router.post('/login', loginUsuario);
router.get('/actual', getUsuarioActual);

module.exports = router;