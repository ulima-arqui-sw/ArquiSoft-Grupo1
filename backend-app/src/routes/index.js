const { Router } = require('express');
const router = Router();
const { getMisReuniones, crearReunion, agregarInvitado, getInvitaciones } = require('../controllers/reuniones.controller');
const { getPublicaciones } = require('../controllers/publicaciones.controller');

router.get('/reunion/mis-reuniones/:idUser', getMisReuniones)
router.post('/reunion/crear', crearReunion)
router.post('/reunion/agregar-invitado', agregarInvitado)
router.get('/reunion/invitaciones/:idUser', getInvitaciones)


router.get('/publicacion/feed/:idUser', getPublicaciones)


module.exports = router;