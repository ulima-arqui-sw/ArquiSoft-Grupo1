const { Usuario } = require('../models');



module.exports = async () => {
  const users =
    [
      {
        nombre: 'Alessandra',
        apellido: 'Nuñez',
        tipo_documento: 'DNI',
        n_documento: '11122233',
        correo: 'a@gmail.com',
        contraseña: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'mentor'
      },
      {
        nombre: 'Sebastian',
        apellido: 'Diaz',
        tipo_documento: 'DNI',
        n_documento: '11122233',
        correo: 's@gmail.com',
        contraseña: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
      {
        nombre: 'Juan',
        apellido: 'Valdez',
        tipo_documento: 'DNI',
        n_documento: '11122233',
        correo: 'j@gmail.com',
        contraseña: 'contra',
        imagen_url: 'a',
        tipo_usuario: 'aprendiz'
      },
    ]
  
  await Usuario.bulkCreate(users);


};
