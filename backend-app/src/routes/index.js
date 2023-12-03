const { Router } = require('express');
const router = Router();
const { getMisReuniones, crearReunion, agregarInvitado, getInvitaciones } = require('../controllers/reuniones.controller');
const { getPublicaciones } = require('../controllers/publicaciones.controller');
const { uploadFile, downloadFile } = require('../controllers/archivos.controller');
const { getUsuario } = require('../controllers/usuario.controller');
const { checkCachePublicaciones } = require('../middlewares/cache');
const { enviarCorreo } = require('../controllers/mails.controller');

router.get('/reunion/mis-reuniones/:idUser', getMisReuniones)
router.post('/reunion/crear', crearReunion)
router.post('/reunion/agregar-invitado', agregarInvitado)
router.get('/reunion/invitaciones/:idUser', getInvitaciones)


router.get('/publicacion/feed/:idUser', checkCachePublicaciones, getPublicaciones)

router.get('/usuario/obtener-datos/:id', getUsuario)

router.get('/archivo/obtener-archivo/:key', downloadFile)
router.post('/archivo/subir-archivo/', uploadFile)

router.post('/enviar-correo', enviarCorreo)

module.exports = router;