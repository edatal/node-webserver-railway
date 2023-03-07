const express = require('express');
const hbs = require('hbs');

//Establecer variables de entorno de .env (instalar npm i dotenv)
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico en Pag Principal
app.use( express.static('public') );

//Pag Home
app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Eduardo Atilano", 
        titulo: "Curso de Node"
    });
});

//Pag Generic
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "Eduardo Atilano", 
        titulo: "Curso de Node"
    });
});

//Pag Elements
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Eduardo Atilano", 
        titulo: "Curso de Node"
    });
});

//Cualquier otra pag
app.get('*', (req, res) => {
    //res.send('404 | File Not Found');
    res.render('404');
});

//Iniciar conexión
app.listen(port, () => {
    console.log(`App listening at port: ${port}`);
});