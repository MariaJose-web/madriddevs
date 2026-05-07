// Importamos express, 
import express from "express";
const app = express(); 
const port = 3000; 
const data = {nombre:'Madrid claro que sí'};

//Middleware Creamos la carpeta public para los elementos estaticos 
app.use('/', express.static('public')); 

//Configuramos ejs. para decir que es el motor de plantillas. 
app.set('view engine', 'ejs') 
//Definimos la carpeta que vamos a utilizar. si no se pone nada por defecto es views. 
app.set('views', './views') //

//Rutas
app.get('/', (req, res) => {
    //res.send(`<h1>Hola Mundo</h1>`);
    res.render('index', data); // renderiza la template con los datos para crear la pagina a mostrar 
} ) 

//Lanzar Servidor
app.listen(port, ()=>{console.log(`Has iniciado servicio en el puesto ${port}`)})
