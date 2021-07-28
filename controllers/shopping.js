// //-------------------------SHOPPING
// const shopping = [{
//     _id: "60e50acb67fd165610dbec71",
//     nombre: "dasd",
//     manager: "Jose",
//     comercios: ["avellaneda", "NuevaCordoba"]
// }]

const Shopping = require("../models/shopping");


const getAllShopping = async(req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.page);
    const skipIndex = (page - 1) * limit;

    try {
        const count = await Shopping.conutDocuments();
        const result = await Shopping.find()
            .populate("manager", "-_id -createAt -updateAt -__v")
            .populate({ path: "comercios", populate: { path: "manager" } })
            .sort({ _id: 1 })
            .limit(limit)
            .skip(skipIndex);
        return res.status(200).json({
            code: "OK all shopping",
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


const getShopping = async(req, res) => {
    try {
        const shopping = await Shopping.findById(req.params._id)
            .populate("manager", "-__v")
            .populate("comercios", "-__v");
        if (!shopping) {
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
            data: shopping
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

const postShopping = async(req, res) => {
    try {
        const shopping = await Shopping.create(req.body);
        console.log(shopping);
        res.status(200).json({
            code: "Ok",
            message: null,
            success: true,
            data: shopping
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
const putShopping = async(req, res) => {
    try {
        const shopping = await Shopping.findOneAndUpdate({ _id: req.params._id }, {...req.body }, { new: true });
        return res.status(200).json({
            code: "Ok get",
            message: null,
            success: true,
            data: usuario
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
const deleteShopping = async(req, res) => {
    try {
        await Shopping.deleteOne({ _id: req.params._id });
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
    getAllShopping,
    getShopping,
    postShopping,
    putShopping,
    deleteShopping
}