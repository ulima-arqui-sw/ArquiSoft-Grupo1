const { Router } = require('express');
const router = Router();
const { getMisReuniones, crearReunion, agregarInvitado, getInvitaciones } = require('../controllers/reuniones.controller');

router.get('/reunion/mis-reuniones/:idUser', getMisReuniones)
router.post('/reunion/crear', crearReunion)
router.post('/reunion/agregar-invitado', agregarInvitado)
router.get('/reunion/invitaciones/:idUser', getInvitaciones)


module.exports = router;