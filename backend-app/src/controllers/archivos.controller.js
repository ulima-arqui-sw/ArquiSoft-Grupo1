const AWS = require("aws-sdk");
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');

//Configurar credenciales de S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});
const bucket = process.env.AWS_S3_BUCKET;

// Subir un objeto al bucket S3

const uploadFile = async (req,res) => {
    // console.log('Request body:', req.body);
    // console.log('Uploaded files:', req.files);
    // console.log('-----------------------')
    // console.log('File Title:', req.body.fileTitle);
    // console.log('File:', req.files[0]);
    // console.log('-----------------------')
    const fileBuffer = fs.readFileSync(req.files[0].path);
    // console.log('File Buffer:', fileBuffer);

    try {   
        await s3.putObject({
            Body: fileBuffer,
            Bucket: bucket,
            Key: req.body.fileTitle,
        }).promise();
        return res.status(200).json({ message: 'Archivo subido con exito' }); 
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getKeys = async (req, res) => {
    try{
        const response = await s3.listObjectsV2({
            Bucket: bucket,
        }).promise();

        const keys = response.Contents.map(object => object.Key);
        console.log('Keys in S3 bucket:', keys);
        return res.status(200).send(keys)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


// Descargar un archivo del bucket S3

const downloadFile = async (req, res) => {
    try {
        const { key } = req.params
        const data = await s3.getObject({
            Bucket: bucket,
            Key: key
        }).promise();
        res.setHeader('Content-Type', data.ContentType);
        res.setHeader('Content-Disposition', `attachment; filename="${key}"`); 
        return res.status(200).send(data.Body)
    } catch (error) {
        console.error(error);
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
    getKeys
}