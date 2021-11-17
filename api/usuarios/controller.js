const express = require('express'); 
const controladorUsuarios = express.Router(); 


// Get iniciar sesión 
// Get obtener un usuario por el id. 

controladorUsuarios.get("/iniciarSesion", function(req, res){
    let datos = req.query;
    res.send("los datos son: " +datos.usuario +" "+datos.contrasena);

})

module.exports = controladorUsuarios; 
