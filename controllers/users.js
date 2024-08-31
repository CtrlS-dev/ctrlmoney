const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');

usersRouter.post('/',async (request, response) => {
  const { name, email, password} = request.body
  
  // Creo notificacion de error en caso de que algun campo esté vacío o incorrecto
  if (!name || !email || !password) {
    return response.status(400).json({error: 'Todos los espacios son requeridos'});
  }

  // compruebo si el email ya existe
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return response.status(400).json({error: 'Este correo ya está registrado'});
  }

  // Encripto la contraseña
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  
  // Creo el nuevo usuario
  const newUser = new User({
    name,
    email,
    passwordHash,
  });

  // Guardo el nuevo usuario
  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser.id }, process.env.ACCES_TOKEN_SECRET,{
    expiresIn: '1d'
  });

  

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: savedUser.email, // list of receivers
    subject: "Verificacion de usuario ✔", // Subject line
    html: `<a href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar Correo</a>`, // html body
  });

  return response.status(201).json('Usuario creado. Por favor verificar tu correo');
  
});

usersRouter.patch('/:id/:token', async (request, response) => {
  try {
    const token = request.params.token;
    const decodedToken = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
    const id = decodedToken.id;
    await User.findByIdAndUpdate(id, {verified: true});
    return response.sendStatus(200);
  } catch (error) {
    // Encontrar el email de usuario
    const id = request.params.id;
    const {email} = await User.findById(id);

    // Firmar el nuevo token
    const token = jwt.sign({ id: id }, process.env.ACCES_TOKEN_SECRET,{
      expiresIn: '1d'
    });
  
    
    // Enviar el email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // list of receivers
      subject: "Verificacion de usuario ✔", // Subject line
      html: `<a href="${PAGE_URL}/verify/${id}/${token}">Verificar Correo</a>`, // html body
    });  

    return response.status(400).json({error: 'El link ya expiró, se ha enviado un nuevo link de verificación a su correo'})
  }
});

module.exports = usersRouter;