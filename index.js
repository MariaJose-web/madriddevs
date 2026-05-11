// Importamos express, 
import express from "express";
//Importamos el json. 
import data from './data/data.json' with { type:"json" };
//Generamos las variables funcionales. 
const app = express(); 
const port = 3000; 


//Middleware Creamos la carpeta public para los elementos estaticos 
app.use('/', express.static('public')); 

//Configuramos ejs. para decir que es el motor de plantillas. 
app.set('view engine', 'ejs') 
//Definimos la carpeta que vamos a utilizar. si no se pone nada por defecto es views. 
app.set('views', './views/pages') 

//Rutas
app.get('/', (req, res) => {
    //res.send(`<h1>Hola Mundo</h1>`);
    res.render('index', {data}); // renderiza la template con los datos para crear la pagina a mostrar 
} ) 
// Dirección Dinamica para la lista de usuarios. 
const mostrarLista = function (req, res) {
    //res.json(data); 
    res.render('lista.ejs', { listadoDevs: data.devs }); 
 }
app.get('/lista', mostrarLista); 

//Dirección Dinamica para un solo dev(usuario)
const mostrarUno = function (req, res) {
    const {id} = req.params;  //DEvuelve un objeto en string
    //const id = parseInt(req.params.id);   Generamos un campo nuevp accediendo a la variable que es un string y luego lo convertimos a un numerico.
    const persona = data.devs.find((item) => item.id==id);  
    //res.send(persona); 
    res.render('detalleDev.ejs', {persona});
} 
app.get('/lista/:id', mostrarUno); 

//Lanzar Servidor
app.listen(port, ()=>{console.log(`Has iniciado servicio en el puesto ${port}`)})
