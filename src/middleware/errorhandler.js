const express = require('express');

// Función de manejador de errores
const errorHandler = (err, req, res, next) => {
  // Obtenemos el código de estado del error
  const statusCode = err.statusCode || 500;

  // Creamos la respuesta
  const response = {
    status: statusCode,
    error: err.message,
    stack: err.stack,
    request: req.body,
  };

  // Redirigimos al usuario a una página de error personalizada
  if (statusCode === 404) {
    // Enviamos una respuesta personalizada
    res.status(404).send({
      error: 'El directorio no existe',
    });
  } else {
    // Enviamos la respuesta normal
    res.status(statusCode).json(response);
  }
};

module.exports = errorHandler;