const { sequelize, Usuario, Reunion, UsuarioReunion } = require('../models');

const getMisReuniones = async (req, res) => {
  const { idUser } = req.params
  await Reunion.findAll({
    where: {
      idAnfitrion: idUser
    }
  }).then((reuniones) => {
    return res.status(200).send(reuniones)
  })
}

const crearReunion = async (req, res) => {
  try {
    const { idUser, nombreReunion } = req.body
    await Reunion.create({
      nombreReunion: nombreReunion,
      fecha: new Date(),
      idAnfitrion: idUser
    })
    return res.status(200).json({ message: 'Reunion creada con exito' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const agregarInvitado = async (req, res) => {
  try {
    const { idReunion, correoInvitado } = req.body;
    const invitado = await Usuario.findOne({
      where: {
        correo: correoInvitado
      }
    });

    if (!invitado) return res.status(500).json({ message: 'No se encontró al usuario con ese correo' })

    const [usuarioReunion, created] = await UsuarioReunion.findOrCreate({
      where: {
        idReunion,
        idInvitado: invitado.id,
      },
      defaults: {
        idReunion,
        idInvitado: invitado.id
      }
    });

    if (!created) {
      return res.status(500).json({ message: 'El usuario ya se encuentra en la lista de invitados' });
    }
    return res.status(200).json({ message: 'Invitado agregado con éxito' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un error al agregar el invitado' })
  }
}

const getInvitaciones = async (req, res) => {
  try {
    const { idUser } = req.params
    const usuario = await Usuario.findByPk(idUser)
    const reuniones = await usuario.getReunionesInvitadas()
    res.status(200).send(reuniones)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = {
  getMisReuniones,
  crearReunion,
  agregarInvitado,
  getInvitaciones
}