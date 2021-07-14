const { Router } = require(`express`);
const router = Router();


const {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
} = require(`../controllers/usuarios`)


//validaciones
const {
    validarIdParamUsuario,
    validarPostUsuario,
    validarPutUsuario,
} = require(`../middlewares/validar-usuarios`)



router.get(`/:_id`, validarIdParamUsuario, getUsuario)

router.post(`/`, validarPostUsuario, postUsuario)

router.put(`/:_id`, validarIdParamUsuario, validarPutUsuario, putUsuario)

router.delete(`/:_id`, validarIdParamUsuario, deleteUsuario)

module.exports = router;