const { Router } = require(`express`);
const router = Router();


const {
    getShopping,
    postShopping,
    putShopping,
    deleteShopping,
    getAllShopping,
} = require(`../controllers/shopping`)


//validaciones
const {
    validarIdParamShopping,
    validarPostShopping,
    validarPutShopping,
} = require(`../middlewares/validar-shopping`)


router.get(`/`, getAllShopping)

router.get(`/:_id`, validarIdParamShopping, getShopping)

router.post(`/`, validarPostShopping, postShopping)

router.put(`/:_id`, validarIdParamShopping, validarPutShopping, putShopping)

router.delete(`/:_id`, validarIdParamShopping, deleteShopping)

module.exports = router;