const AWS = require("aws-sdk");
const dotenv = require('dotenv');
dotenv.config();

//Configurar credenciales de S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const bucket = process.env.AWS_S3_BUCKET;

// Subir un objeto al bucket S3
async function uploadFile(key, body) {
    await s3.putObject({
        Body: body,
        Bucket: bucket,
        Key: key,
    }).promise();
}

// Descargar un archivo del bucket S3
async function downloadFile(key) {
    await s3.getObject({
        Bucket: bucket,
        Key: key,
    }).promise();
}

// Eliminar un archivo del bucket S3
// async function deleteFile(key) {
//     await s3.deleteObject({
//         Bucket: bucket,
//         Key: key,
//     }).promise();
// }