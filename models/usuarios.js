const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    fec_nac: {
        type: Date,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    roles: [{
        type: String,
        require: true,
        enum: ["ADMIN",
            "SHOPPING_MANAGER",
            "COMMERCE_MANAGER",
            "USER"
        ]
    }]
}, {
    timestamps: true
});

module.exports = model("Usuario", UsuarioSchema);