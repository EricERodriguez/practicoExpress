const Joi = require(`joi`);

const validarIdParamComercio = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required()
    }).required();

    try {
        await schema.validateAsync(req.params);
        return next();
    } catch (error) {
        return res.status(404).send({
            mensaje: "Datos de entrada invalidos"
        })
    }
};

//requerimos todos porq es para crear un comercio
const validarPostComercio = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(),
        nombre: Joi.string().required(),
        manager: Joi.string().required(),
        shopping: Joi.string().required()
    });

    try {
        await schema.validateAsync(req.body);
        return next();
    } catch (error) {
        return res.status(404).send({
            mensaje: "Datos de entrada invalidos"
        });
    }
};


const validargetComercio = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required()
    });

    try {
        await schema.validateAsync(req.params);
        return next();
    } catch (error) {
        return res.status(404).send({
            mensaje: "Datos de entrada invalidos"
        })
    }

};

const validarPutComercio = async(req, res, next) => {
    const schema = Joi.object({
        nombre: Joi.string(),
        manager: Joi.string(),
        shopping: Joi.string()
    });

    try {
        await schema.validateAsync(req.body);
        return next();
    } catch (error) {
        return res.status(404).send({
            mensaje: "Datos de entrada invalidos"
        });
    }
};





module.exports = {
    validarIdParamComercio,
    validarPostComercio,
    validargetComercio,
    validarPutComercio
}