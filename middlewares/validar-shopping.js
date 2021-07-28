const Joi = require(`joi`);

const validarIdParamShopping = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required()
    }).required();

    try {
        await schema.validateAsync(req.params);
        return next();
    } catch (error) {
        return res.status(404).json({
            code: "VALIDATION-ERR",
            message: error.details[0].message,
            success: false,
            data: null
        })
    }
};

//requerimos todos porq es para crear un comercio
const validarPostShopping = async(req, res, next) => {
    const schema = Joi.object({
        nombre: Joi.string().required(),
        manager: Joi.string().required(),
        comercios: Joi.array().items(Joi.string())
    });

    try {
        await schema.validateAsync(req.body);
        return next();
    } catch (error) {
        return res.status(404).json({
            code: "VALIDATION-ERR",
            message: error.details[0].message,
            success: false,
            data: null
        });
    }
};


// const validargetShopping = async(req, res, next) => {
//     const schema = Joi.object({
//         _id: Joi.string().required()
//     });

//     try {
//         await schema.validateAsync(req.params);
//         return next();
//     } catch (error) {
//         return res.status(404).send({
//             mensaje: "Datos de entrada invalidos"
//         })
//     }

// };

const validarPutShopping = async(req, res, next) => {
    const schema = Joi.object({
        manager: Joi.string(),
        comercios: Joi.array().items(Joi.string())
    });

    try {
        await schema.validateAsync(req.body);
        return next();
    } catch (error) {
        return res.status(404).json({
            code: "VALIDATION-ERR",
            message: error.details[0].message,
            success: false,
            data: null
        });
    }
};





module.exports = {
    validarIdParamShopping,
    validarPostShopping,
    // validargetShopping,
    validarPutShopping
}