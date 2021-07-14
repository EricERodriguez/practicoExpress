// const usuarios = [{
//     _id: "asd",
//     nombre: "adolfo",
//     apellido: "Gutierrez",
//     fec_nac: "Tue Jul 13 2021 19:24:14 GMT-0300",
//     password: "lksudhf",
//     email: "nc@example.com",
//     roles: ["ADMIN"]
// }]

const getUsuario = (req, res) => {
    res.status(200).send('OK');
}

const postUsuario = (req, res) => {
    res.status(200).send('OK');
}
const putUsuario = (req, res) => {
    res.status(200).send('OK');
}
const deleteUsuario = (req, res) => {
    res.status(200).send('OK');
}



// const getUsuarios = (req, res) => {
//     res.send(usuarios);
// }

// const getUsuario = (req, res) => {
//     const { id } = req.params;
//     const usuario = usuarios.find(u => u.id === Number(id));
//     if (!usuario) {
//         return res.status(404).send({ mensaje: `No se encontro el usuario` })
//     }
// }

// const postUsuarios = (req, res) => {
//     const { id, nombre } = req.body;
//     const usuario = { id, nombre }
//     usuarios.push(usuario)
//     return res.send(usuarios)
// }

// const putUsuario = (req, res) => {
//     const { id } = req.params;
//     const { nombre } = req.body;
//     const usuario = usuarios.find(u => u.id === Number(id));
//     if (!usuario) {
//         return res.status(404).send({ mensaje: `No se encontro el usuario` })
//     }
//     usuario.nombre = nombre;
//     return res.send(usuario)
// }

// const deleteUsuario = (req, res) => {
//     const { id } = req.prams;
//     const indez = usuarios.findIndex(u => u.id === Number(id));
//     if (index < 0) {
//         return res.status(404).send();
//     }
//     usuarios.splice(index, 1);
//     return res.status(200).send();
// }

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}