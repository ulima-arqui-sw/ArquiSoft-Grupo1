const { DynamoDBClient, ScanCommand, GetItemCommand, PutItemCommand, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");
const dotenv = require('dotenv');
const usuario = require("../models/Usuario");
dotenv.config();
const crypto = require('crypto');

// Configura las credenciales y la región
const client = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

//obtener mensajes entre usuario y asesor
const obtenerMensajesEntreUsuarios = async (req, res) => {
  const { rol } = req.params;
  const { idAprendiz, idMentor } = req.body;

  if (!idAprendiz || !idMentor) return res.status(400).json({ mensaje: 'Faltan datos' });
  if (rol !== 'mentor' && rol !== 'aprendiz') return res.status(400).json({ mensaje: 'Rol no válido' });

  try {
    if (rol === 'mentor') {
      const command = new ScanCommand({
        TableName: "Mensajes",
        FilterExpression: "remitente = :idMentor AND destinatario = :idAprendiz",
        ExpressionAttributeValues: {
          ":idMentor": { N: idMentor.toString() },
          ":idAprendiz": { N: idAprendiz.toString() },
        },
      });
      const response = await client.send(command);
      return res.json(response.Items);
    }

    const command = new ScanCommand({
      TableName: "Mensajes",
      FilterExpression: "remitente = :idAprendiz AND destinatario = :idMentor",
      ExpressionAttributeValues: {
        ":idAprendiz": { N: idAprendiz.toString() },
        ":idMentor": { N: idMentor.toString() },
      },
    });

    console.log("COMMAND", command);

    const response = await client.send(command);
    return res.json(response.Items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: 'Error al obtener los mensajes' });
  }
}



//guardar un mensaje entre aprendiz y mentor
const guardarMensaje = async (req, res) => {
  const { rol } = req.params;
  const { idAprendiz, idMentor, contenido } = req.body;

  if (!idAprendiz || !idMentor) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  if (rol !== 'mentor' && rol !== 'aprendiz') {
    return res.status(400).json({ mensaje: 'Rol no válido' });
  }

  try {
    let remitente, destinatario;
    if (rol === 'mentor') {
      remitente = idMentor;
      destinatario = idAprendiz;
    } else {
      remitente = idAprendiz;
      destinatario = idMentor;
    }


    const combinedId = `${idAprendiz}${idMentor}`;
    const command = new PutItemCommand({
      TableName: "Mensajes",
      Item: {
        IdConversacion: { N: combinedId.toString() },
        IdMensaje: { S: crypto.randomBytes(16).toString("hex") },
        contenido: { S: contenido },
        remitente: { N: remitente.toString() },
        destinatario: { N: destinatario.toString() },
        fecha: { S: new Date().toISOString() }
      }
    });


    console.log("COMMAND", command);
    const response = await client.send(command);

    return res.json({ mensaje: 'Mensaje guardado correctamente', response });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    return res.status(500).json({ mensaje: error });
  }
};

const borrarTodosLosMensajes = async (req, res) => {
  try {
    const command = new ScanCommand({
      TableName: "Mensajes",
    });
    const response = await client.send(command).then(response => {
      response.Items.forEach(async (item) => {
        const command = new DeleteItemCommand({
          TableName: "Mensajes",
          Key: {
            IdMensaje: { S: item.IdMensaje.S }
          }
        });
        await client.send(command);
      });
    });

    return res.json({ mensaje: 'Mensajes borrados correctamente', response });
  } catch (error) {
    console.error('Error al borrar los mensajes:', error);
    return res.status(500).json({ mensaje: 'Error al borrar los mensajes' });
  }
}

const obtenerTodosLosMensajes = async (req, res) => {
  try {
    const command = new ScanCommand({
      TableName: "Mensajes",
    });
    const response = await client.send(command).then(response => {
      return res.json(response.Items);
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: 'Error al obtener los mensajes' });
  }
}

module.exports = { obtenerMensajesEntreUsuarios, guardarMensaje, obtenerTodosLosMensajes, borrarTodosLosMensajes };
// PARA OBTENER TODOS LOS OBJETOS DE LA TABLA
/*
const command = new ScanCommand({
  TableName: "Mensajes"
});

// Ejecuta el comando
client.send(command)
  .then(response => {
    console.log(response.Items);
  })
  .catch(error => {
    console.error(error);
  });
*/

// PARA OBTENER UN OBJETO POR ID
/*
// ID del objeto que deseas obtener
const idDelObjeto = "valor-del-id";

// Crea un comando para obtener el objeto por su ID
const command = new GetItemCommand({
  TableName: "Mensajes",
  Key: {
    id: { S: idDelObjeto } // Ajusta el nombre y tipo de la clave según tu esquema
  }
});

// Ejecuta el comando
client.send(command)
  .then(response => {
    console.log("Objeto obtenido con éxito:", response.Item);
  })
  .catch(error => {
    console.error("Error al obtener el objeto:", error);
  });
*/


// PARA CREAR UN OBJETO
/* 
const objetoAInsertar = {
  id: "valor-del-id",
  campo1: "valor1",
  campo2: "valor2",
  // ... otros campos
};

// Crea un comando para insertar el objeto en la tabla
const command = new PutItemCommand({
  TableName: "Mensajes",
  Item: objetoAInsertar
});

// Ejecuta el comando
client.send(command)
  .then(response => {
    console.log("Objeto insertado con éxito:", response);
  })
  .catch(error => {
    console.error("Error al insertar el objeto:", error);
  });
*/

