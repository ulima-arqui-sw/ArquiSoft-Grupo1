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

// Obtener mensajes entre usuarios
const obtenerMensajesEntreUsuarios = async (req, res) => {
  const { idAprendiz, idMentor } = req.body;

  if (!idAprendiz || !idMentor) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  try {
    const combinedId1 = `${idAprendiz}-${idMentor}`;
    const combinedId2 = `${idMentor}-${idAprendiz}`;

    // Buscar los mensajes usando cualquiera de las claves combinadas
    const params = {
      TableName: "Mensajes",
      FilterExpression: "IdConversacion = :id1 OR IdConversacion = :id2",
      ExpressionAttributeValues: {
        ":id1": { S: combinedId1 },
        ":id2": { S: combinedId2 }
      }
    };

    const response = await client.send(new ScanCommand(params));

    return res.json(response.Items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error al obtener los mensajes' });
  }
};

// Guardar un mensaje entre aprendiz y mentor
const guardarMensaje = async (req, res) => {
  const { remitente, destinatario, contenido } = req.body;
  const combinedId = `${remitente}-${destinatario}`;

  try {
    const params = {
      TableName: "Mensajes",
      Item: {
        IdConversacion: { S: combinedId },
        IdMensaje: { S: crypto.randomBytes(16).toString("hex") },
        Contenido: { S: contenido },
        Remitente: { N: remitente.toString() },
        Destinatario: { N: destinatario.toString() },
        Fecha: { S: new Date().toISOString() }
      }
    };

    const response = await client.send(new PutItemCommand(params));

    return res.json({ 
      mensaje: 'Mensaje guardado correctamente',
      contenido: contenido,
      response: response
    });

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

