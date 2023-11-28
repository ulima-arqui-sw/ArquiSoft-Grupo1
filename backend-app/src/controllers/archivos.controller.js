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

const uploadFile = async (req,res) => {
    try {
        const { body, key } = req.body;
        await s3.putObject({
            Body: body,
            Bucket: bucket,
            Key: key
        }).promise();
        return res.status(200).json({ message: 'Archivo subido con exito' }); 
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Descargar un archivo del bucket S3

const downloadFile = async (req, res) => {
    try {
        const { key } = req.params
        const data = await s3.getObject({
            Bucket: 'bucket',
            Key: key
        }).promise();
        return res.status(200).send(data.Body)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// Eliminar un archivo del bucket S3
// async function deleteFile(key) {
//     await s3.deleteObject({
//         Bucket: bucket,
//         Key: key,
//     }).promise();
// }


module.exports = {
    uploadFile,
    downloadFile,
}