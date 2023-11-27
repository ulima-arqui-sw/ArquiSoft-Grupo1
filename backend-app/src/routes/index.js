const { Router } = require('express');
const router = Router();
const { getMisReuniones, crearReunion, agregarInvitado, getInvitaciones } = require('../controllers/reuniones.controller');
const { getPublicaciones } = require('../controllers/publicaciones.controller');
const { getUsuario } = require('../controllers/usuario.controller');
const { checkCachePublicaciones } = require('../middlewares/cache');

router.get('/reunion/mis-reuniones/:idUser', getMisReuniones)
router.post('/reunion/crear', crearReunion)
router.post('/reunion/agregar-invitado', agregarInvitado)
router.get('/reunion/invitaciones/:idUser', getInvitaciones)


router.get('/publicacion/feed/:idUser', checkCachePublicaciones, getPublicaciones)

router.get('/usuario/obtener-datos/:id', getUsuario)


module.exports = router;