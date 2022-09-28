const express = require('express');
const app = express();

// Importar conexion mongoDB
const archivoBD = require('./conexion')

//Importacion de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario')

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:'true'}))

app.use('/api/usuario',rutausuario)

app.get('/', (req, res) => {
    res.end("Bienvenido al server Back-End Node.js corriendo...")
})


//Configurar server basico
app.listen(5000,function(){
    console.log('El servidor NODE JG esta corriendo correctamente');
})