const { Schema, model } = require("mongoose");

const ComercioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        require: true
    },
    shopping: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = model("Comercio", ComercioSchema);