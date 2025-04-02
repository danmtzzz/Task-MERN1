const express = require('express');
const router = express.Router();
const {registrarUsuario, getUsuarioActual, loginUsuario} = 
require('../controladores/controladorUsuario');
const {protects} = require('../middleware/authMiddleware')

router.post('/', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/actual',protects, getUsuarioActual);

module.exports = router;