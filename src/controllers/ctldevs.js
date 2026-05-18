//Importar Datos

//funciones
const ctldevs = {
    // Dirección Dinamica para la lista de usuarios. 
    mostrarLista: function (req, res) {
    //res.json(data); 
    res.render('lista.ejs', { listadoDevs: data.devs }); 
    },
    //Dirección Dinamica para un solo dev(usuario)
    mostrarUno: function (req, res) {
    const {id} = req.params;  //DEvuelve un objeto en string
    //const id = parseInt(req.params.id);   Generamos un campo nuevp accediendo a la variable que es un string y luego lo convertimos a un numerico.
    const persona = data.devs.find((item) => item.id==id);  
    //res.send(persona); 
    res.render('detalleDev.ejs', {persona});
    },  

}

export default ctldevs; 