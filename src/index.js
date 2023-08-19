require('dotenv').config()
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const connection = require('./connection');
const contactoRouter = require('./router/contact');

// Configuracion de la aplicación

app.set('title', 'Mi Portafolio')
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true, }))
app.use(express.json())
app.use(cors())

// Rutas
app.get('/portfolio', (req, res) => {
    res.render('index')
})

app.use('/', contactoRouter);

// Iniciazion del servidor

app.listen(app.get('port'), () => {
    console.log(`Mi servidor esta corriendo en: localhost:` + app.get('port'));
})
