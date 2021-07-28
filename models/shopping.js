const { Schema, model } = require("mongoose");

const ShoppingSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        require: true
    },
    comercios: [{
        type: String,
        require: true
    }]
}, {
    timestamps: true
});

module.exports = model("Shopping", ShoppingSchema);