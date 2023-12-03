const { horarios } = require('../models')

const getHorario = async (req, res) => {
  try {
    const { id_mentor } = req.params;
    const horario = await horarios.findAll({
      where: {
        id_mentor,
      }
    });
    if (!horario) return res.status(404).json({ message: 'Mentor no existe' })
    res.json(horario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const createHorario = async (req, res) => {
  const { id_mentor, dia_semana, hora_inicio, hora_fin } = req.body

  try {
    const newHorario = await horarios.create({
      id_mentor,
      dia_semana,
      hora_inicio,
      hora_fin
    })

    res.json(newHorario)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateHorario = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_mentor,
      dia_semana,
      hora_inicio,
      hora_fin
    } = req.body

    const horario = await horarios.findByPk(id)
    horario.id_mentor = id_mentor
    horario.dia_semana = dia_semana
    hora_inicio = hora_inicio
    hora_fin = hora_fin

    await horario.save()

    res.json(horario)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteHorario = async (req, res) => {
  try {
    const { id } = req.params

    await horarios.destroy({
      where: {
        id,
      }
    })

    res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getHorario,
  createHorario,
  updateHorario,
  deleteHorario
}