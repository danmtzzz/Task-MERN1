const express = require('express');
const router = express.Router();
const {getTareas, setTarea,actualizarTarea,eliminarTarea} = require
('../controladores/controladorTareas');

router.route('/').get(getTareas).post(setTarea);
module.exports = router;


/*router.get('/', (req,res) => {
	res.status(200).json({ mensaje: `Obtener todas las tareas`});
});*/

//router.get('/', getTareas);


/*router.post('/', (req, res) => {
   res.status(200).json( {mensaje: `Crear Tarea` });
});*/

//router.post('/', setTarea);

/*router.put('/:id', (req,res) => {
   res.status(200).json({ mensaje: `Tarea ${req.params.id} actualizada.` });
});*/

//router.put('/:id', actualizarTarea);

/*router.delete('/:id', (req,res) =>{
  res.status(200).json({mensaje: `Tarea ${req.params.id} eliminada.`});
});*/


// router.delete('/:id', eliminarTarea);

