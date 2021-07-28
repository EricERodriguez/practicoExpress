// //-------------------------COMERCIO
// {
//     _id: "60e50acb67fd165610dbec71", 
//     nombre: "string",
//     manager: "string",
//     shopping: "string"
// }

const Comercio = require("../models/comercio");

const getAllComercios = async(req, res) => {

    //paginado

    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const skipIndex = (page - 1) * limit;


    try {
        const count = await Comercio.countDocuments();
        const results = await Comercio.find().sort({ _id: 1 }).limit(limit).skip(skipIndex);
        return res.status(200).json({
            code: "Ok getAll",
            message: null,
            success: true,
            data: {
                count,
                results
            }
        });
    } catch (error) {
        return res.status(500).json({
            code: "ERR",
            message: error.message,
            success: false,
            data: null
        });
    }
}

const getComercio = async(req, res) => {
    try {
        const comercio = await Comercio.findById(req.params._id);
        if (!comercio) {
            return res.status(404).json({
                code: "NOT_FOUND",
                message: null,
                success: false,
                data: null
            });
        };
        return res.status(200).json({
            code: "Ok get",
            message: null,
            success: true,
            data: comercio
        });
    } catch (error) {
        return res.status(500).json({
            code: "ERR",
            message: error.message,
            success: false,
            data: null
        });
    }
}

const postComercio = async(req, res) => {
    try {
        const comercio = await Comercio.create(req.body);
        console.log(comercio);
        res.status(200).json({
            code: "Ok",
            message: null,
            success: true,
            data: comercio
        });
    } catch (error) {
        console.log(error);

        // Esta es nuestra respuesta desde el backend
        return res.status(500).send({
            code: "ERR",
            message: error.message,
            success: false,
            data: null
        });
    }
}
const putComercio = async(req, res) => {
    try {
        const comercio = await Comercio.findOneAndUpdate({ _id: req.params._id }, {...req.body }, { new: true });
        return res.status(200).json({
            code: "Ok get",
            message: null,
            success: true,
            data: comercio
        });
    } catch (error) {
        return res.status(500).json({
            code: "ERR",
            message: error.message,
            success: false,
            data: null
        });
    }
}
const deleteComercio = async(req, res) => {
    try {
        await Comercio.deleteOne({ _id: req.params._id });
        return res.status(200).json({
            code: "Ok delete",
            message: null,
            success: true,
            data: null
        });
    } catch (error) {
        res.status(500).json({
            code: "ERR",
            message: error.message,
            success: false,
            data: null
        });
    };
}


module.exports = {
    getComercio,
    postComercio,
    putComercio,
    deleteComercio,
    getAllComercios
}