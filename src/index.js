const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./router/portfolio')
const cors = require('cors');

dotenv.config();

// Configuración de la aplicación

const app = express();

app.set("title", "XxLiosxX | Portafolio");
app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middlewares

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas

app.use("/", routes);

// Inicio del servidor

app.listen(app.get("port"), () => {
  console.log(`Mi servidor está corriendo en: localhost:${app.get("port")}`);
});