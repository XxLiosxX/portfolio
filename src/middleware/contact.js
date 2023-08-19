const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'Tu Nombre <tucorreo@gmail.com>',
    to: 'correo.destinatario@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Ocurrió un error al enviar el correo.');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('¡Correo enviado correctamente!');
    }
  });
});