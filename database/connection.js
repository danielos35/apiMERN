
// IMPORTAR LOS MODULOS
const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Conexión singleton 
let database;

// crear una promesa
const conectar = function(){
    return new Promise(function(resolve, reject){
        if(database){
            resolve();
        }
        else{
            mongoClient.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
                .then(function(client){
                    database = client.db(process.env.MONGODB_DB);
                    resolve();
                })
                .catch(function(error){
                    reject(error);
                });
        }
    });  
}

const obtenerConexion = function(){
    return database;
}

module.exports = {conectar, obtenerConexion}