const { DynamoDBClient, ScanCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const dotenv = require('dotenv');
dotenv.config();

// Configura las credenciales y la región
const client = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY 
  }
});

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