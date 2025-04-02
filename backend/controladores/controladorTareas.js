const Tarea = require('../modelos/modeloTareas');
const asyncHandler = require('express-async-handler');


//Obtener todas las tareas
/*const getTareas = (req, res) =>{
   res.status(200).json({mensaje:`Obtener todas las tareas`});
}*/

const getTareas = asyncHandler(async (req,res) => {
   const tareas = await Tarea.find({usuario: req.usuario.id});
   res.status(200).json(tareas);
});

const setTarea = asyncHandler(async (req, res)  =>{
   if(!req.body.texto){
      //res.status(400).json({mensaje: 'Por favor proporcione una tarea'});
      res.status(400);
      throw new Error('Por favor proporicione una tarea');
   }else{
      const tarea = await Tarea.create({texto:req.body.texto, usuario:req.usuario.id});
      res.status(200).json(tarea);
   }
});

const actualizarTarea = (req,res)=>{
   res.status(200).json({mensaje: `Tarea ${req.params.id} actualizada`});
}

const eliminarTarea = (req,res)=>{
   res.status(200).json({mensaje: `Tarea ${req.params.id} eliminada`});
}

module.exports = { getTareas, setTarea, actualizarTarea, eliminarTarea };
