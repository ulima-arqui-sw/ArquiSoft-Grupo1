const { Usuario } = require("../models");

const getUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findOne({
      where: {
        id,
      }
    })

    if (!usuario) return res.status(404).json({ message: 'Usuario no existe' })
    res.json(usuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const getUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.findAll();
    res.json(listaUsuarios);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const getUsuariosByType = async (req, resp) => {
  const correo = req.query.correo
  const contrasenia = req.query.contrasenia

  getUser(correo, contrasenia, resp);
};

const createUsuario = async (req, res) => {
  const { nombre, apellido, correo, contrasenia, tipo_documento, n_documento, tipo_usuario } = req.body

  try {
    const newUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      contrasenia,
      tipo_documento,
      n_documento,
      tipo_usuario
    })

    res.json(newUsuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellido,
      correo,
      contrasenia,
      tipo_documento,
      n_documento,
      tipo_usuario
    } = req.body

    const Usuario = await Usuario.findByPk(id)
    Usuario.nombre = nombre
    Usuario.apellido = apellido
    Usuario.correo = correo
    Usuario.contrasenia = contrasenia
    Usuario.tipo_documento = tipo_documento
    Usuario.n_documento = n_documento
    Usuario.tipo_documento = tipo_usuario

    await Usuario.save()

    res.json(Usuario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.destroy({
      where: {
        id,
      }
    });

    res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

async function getUser(email, contrasena, resp) {
  const number = await Usuario.count({
    where: {
      correo,
      contrasenia,
    }
  })
  if (number = 0) {
    //var prob = JSON.parse("-1")
    console.log("No existe tal usuario el tabla")
    resp.send(invUser)
  } else {
    const Usuario = await Usuario.findAll({
      where: {
        correo,
        contrasenia,
      }
    })
  }
  //console.log("Usuario " + number)
  resp.send(Usuario)
  //resp.status(404).json({ message: 'Usuario no existe' })
  //resp.send(invUser)
}

module.exports = {
  getUsuario
}