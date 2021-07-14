# PracticoExpress NodeJS <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="babel" width="40" height="40"/>

API Restful, la cual implementa tres CRUDs sobre los siguientes recursos:
<pre>
<code>
//-------------------------USUARIO
{
    _id: string, //ejemplo: "60e50acb67fd165610dbec71"
    nombre: string,
    apellido: string,
    fec_nac: Date,
    password: string,
    email: string,
    roles: ['ADMIN', 'SHOPPING_MANAGER', 'COMERCE_MANAGER', 'USER']
}

//-------------------------SHOPPING
{
    _id: string, //ejemplo: "60e50acb67fd165610dbec71"
    nombre: string,
    manager: string,
    comercios: string[ ]
}


//-------------------------COMERCIO
{
    _id: string, //ejemplo: "60e50acb67fd165610dbec71"
    nombre: string,
    manager: string,
    shopping: string
}
</code></pre>

Para instalar todas las dependecias
<pre>
<code>npm install</code></pre>

Para ejecutar en local
<pre>
<code>npm start</code></pre>



## Dependencias utilizadas
<pre>
<code>npm i express
npm i dotenv
npm i morgan
npm i joi
npm i nodemon
</code></pre>
