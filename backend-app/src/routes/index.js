const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploadFileDump/' });
const { getMisReuniones, crearReunion, agregarInvitado, getInvitaciones } = require('../controllers/reuniones.controller');
const { getPublicaciones } = require('../controllers/publicaciones.controller');
const { uploadFile, downloadFile, getKeys } = require('../controllers/archivos.controller');
const { getUsuario } = require('../controllers/usuario.controller');
const { checkCachePublicaciones } = require('../middlewares/cache');
const { obtenerMensajesEntreUsuarios, guardarMensaje, obtenerTodosLosMensajes, borrarTodosLosMensajes} = require('../controllers/mensajes.controller');
const { enviarCorreo } = require('../controllers/mails.controller');
const { getHorario, createHorario, deleteHorario, updateHorario } = require('../controllers/horarios.controller')

router.get('/reunion/mis-reuniones/:idUser', getMisReuniones)
router.post('/reunion/crear', crearReunion)
router.post('/reunion/agregar-invitado', agregarInvitado)
router.get('/reunion/invitaciones/:idUser', getInvitaciones)

router.get('/horario/:id_mentor', getHorario)
router.post('/horario/', createHorario)
router.put('/horario/:id', updateHorario)
router.delete('horario/:id', deleteHorario)

router.get('/publicacion/feed/:idUser', checkCachePublicaciones, getPublicaciones)

router.get('/usuario/obtener-datos/:id', getUsuario)

router.get('/archivo/obtener-archivo/:key', downloadFile)
router.post('/archivo/subir-archivo', upload.any(), uploadFile)
router.get('/archivo/obtener-keys/:id', getKeys)

router.post('/enviar-correo', enviarCorreo)

//Obtiene los mensajes entre un usuario y un asesor (requiere por body idUsuario e idAsesor)
router.post('/chat/obtener-mensajes/', obtenerMensajesEntreUsuarios);

//Guarda un mensaje entre un usuario y un asesor (requiere por body idUsuario, idAsesor y contenido)
router.post('/chat/guardar-mensaje/', guardarMensaje);
router.get('/chat/obtener', obtenerTodosLosMensajes);

router.delete('/chat/eliminar', borrarTodosLosMensajes); //prueba para eliminar todos los mensajes de la tabla


module.exports = router;