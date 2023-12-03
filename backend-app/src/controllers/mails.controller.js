const { Usuario, Publicacion } = require("../models");
const AWS = require("aws-sdk");
require("dotenv").config();

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const enviarCorreo = async (req, res) => {
  const { idPublicacion, idUsuario } = req.body;
  const usuarioRecipiente = await Publicacion.findOne({
    where: { id: idPublicacion },
    include: "usuario",
  })
  const usuarioEmisor = await Usuario.findByPk(idUsuario);

  let params = {
    Source: 'anunez.a01@gmail.com',
    Destination: {
      ToAddresses: ['anunez.a01@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Hola ${usuarioRecipiente.usuario.nombre}, ${usuarioEmisor.nombre} ha solicitado ponerse en contacto contigo. Revisa tu bandeja de entrada.`,
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Solicitud de conexión - ExpertConnect",
      }
    },
  };

  new AWS.SES(SES_CONFIG).sendEmail(params).promise().then((resp) => {
    res.send(resp);
  })
}

module.exports = {
  enviarCorreo
}