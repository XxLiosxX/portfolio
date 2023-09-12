const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();


// Configuracion de la aplicación

app.set('title', 'Mi Portafolio');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());

// Rutas
app.get('/portfolio', (req, res) => {
    res.render('index');
});


// Iniciazion del servidor

app.listen(app.get('port'), () => {
    console.log(`Mi servidor esta corriendo en: localhost:` + app.get('port'));
});