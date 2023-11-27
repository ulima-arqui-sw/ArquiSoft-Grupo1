const { sequelize, Usuario, Publicacion } = require('../models');

const getPublicaciones = async (req, res) => {
  try {
    const id = req.params.idUser
    const usuario = await Usuario.findByPk(id)
    var publicaciones
    if (usuario.tipo_usuario === 'mentor') {
      publicaciones = await Publicacion.findAll({
        where: {
          tipo: 'publicacionAprendiz'
        },
        include: 'usuario'
      })
    } else {
      publicaciones = await Publicacion.findAll({
        where: {
          tipo: 'publicacionMentor'
        },
        include: 'usuario'
      })
    }
    res.status(200).send(publicaciones)
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

module.exports = {
  getPublicaciones
}