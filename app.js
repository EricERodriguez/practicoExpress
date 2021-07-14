require(`dotenv`).config();
const express = require("express");
const morgan = require("morgan");
const { number } = require("joi");


//guardar logs y verificar que este andando el programa
const fs = require(`fs`);
const path = require(`path`);

//Rutas
const rutasUsuarios = require(`./routes/usuarios`);
const rutasShopping = require(`./routes/shopping`);
const rutasComercio = require(`./routes/comercio`);


const app = express();

app.use(express.text());
app.use(express.json());

//Utilizando morgan y manipulando archivos
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"), {
        flags: "a",
    }
);

app.use(morgan('tiny', { stream: accessLogStream }));

app.use(`/usuarios`, rutasUsuarios);
app.use(`/shopping`, rutasShopping);
app.use(`/comercio`, rutasComercio);



const port = process.env.PORT;

app.listen(port, () => {
    console.log(`servidor corriendo en el ${port}`)
});