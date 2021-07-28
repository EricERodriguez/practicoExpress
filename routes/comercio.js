const { Router } = require(`express`);
const router = Router();


const {
    getComercio,
    postComercio,
    putComercio,
    deleteComercio,
    getAllComercios,
} = require(`../controllers/comercio`)


//validaciones
const {
    validarIdParamComercio,
    validarPostComercio,
    validarPutComercio,
} = require(`../middlewares/validar-comercio`)


router.get(`/`, getAllComercios)

router.get(`/:_id`, validarIdParamComercio, getComercio)

router.post(`/`, validarPostComercio, postComercio)

router.put(`/:_id`, validarIdParamComercio, validarPutComercio, putComercio)

router.delete(`/:_id`, validarIdParamComercio, deleteComercio)

module.exports = router;