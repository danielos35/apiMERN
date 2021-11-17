// Importar modulos requeridos

const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controladorPeliculas = require("./api/peliculas/controller");
const controladorUsuarios = require("./api/usuarios/controller");
const conexion = require("./database/connection");

// Entorno de seguridad

require('dotenv').config(); 



// Iniciar la configuración

const app = express(); 

//indicar puerto
const port = process.env.PORT;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

// Inicializar rutas
app.use("/api/peliculas", controladorPeliculas);
app.use("/api/usuarios", controladorUsuarios); 

// Conexión con el servidor
conexion.conectar()
    .then(function(){

        app.listen(port,function(){

            console.log("Api ejecutandose en el puerto: " + port);
        });
        

    })
    .catch(function(error){

        reject(error); 
    });




// Configurar el puerto donde se va a monitorear el API


