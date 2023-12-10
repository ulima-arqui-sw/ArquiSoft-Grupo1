const { Usuario } = require('../models');



module.exports = async () => {
  const users =
    [
      {
        nombre: 'Alessandra',
        apellido: 'Nuñez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'alessandra@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'mentor'
      },
      {
        nombre: 'Sebastian',
        apellido: 'Barboza',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'sebastian@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
      {
        nombre: 'Juan',
        apellido: 'Valdez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'juan@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
      {
        nombre: 'Maria',
        apellido: 'Gonzalez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'maria@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
      {
        nombre: 'Pedro',
        apellido: 'Perez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'pedro@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
      {
        nombre: 'Luis',
        apellido: 'Lopez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'luis@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'mentor'
      },
      {
        nombre: 'Carlos',
        apellido: 'Gomez',
        tipo_documento: 'dni',
        n_documento: '11122233',
        correo: 'carlos@gmail.com',
        contrasenia: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'mentor'
      }
    ]
  
  await Usuario.bulkCreate(users);


};
