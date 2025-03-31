const mongoose = require('mongoose');

const DBconexion = async () => {
    try{
        const conexion = await mongoose.connect(process.env.
            MONGO_URI);
            console.log(`MongoDB Conectado: ${conexion.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = DBconexion;