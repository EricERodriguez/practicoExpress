const jwt = require("jsonwebtoken");

const Usuario = require("../models/usuarios");



const login = async(req, res) => {

    //sing({payload}, clave privada)
    const token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);
    // console.log(token);


    // console.log(req.body)

    try {
        return res.status(200).json({
            code: "Ok Send Correcto",
            message: null,
            success: true,
            //le envio el token
            data: token
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


module.exports = {
    login
};