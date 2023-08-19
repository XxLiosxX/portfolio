const express = require('express');
const router = express.Router()
const nodemailer = require('nodemailer');

router.post('/contacto', (req, res) => {
    const { nombre, correo, mensaje } = req.body;
  
    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
    });
  
    // Opciones del correo electrónico
    const mailOptions = {
      from: 'ybarraroberto82@gmail.com',
      to: 'ybarraroberto84@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };
  
    // Envío del correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send('Error al enviar el correo electrónico');
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
        res.send('Correo electrónico enviado correctamente');
      }
    });
  });

router.get('/formulario', (req, res) => {
    res.render('contact');
});

module.exports = router