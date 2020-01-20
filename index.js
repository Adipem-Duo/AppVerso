const app = require('express')();
const PORT = process.env.PORT || 5000
const db = require('./db/knex.js');

let endereco = {
    apelido:'casa do breno',
    logradouro: 'rua benedito de barros',
    numero: 161,
    cep: '05882-379',
    uf: 'SP',
    cidade: 'São Paulo',
    complemento: 'atrás de uma calçada'

}

db("endereco").insert(endereco).returning('*').catch(err => console.log(err));

//app.get('/', (req, res) => res.send("Hello AppVerso"));





app.listen(PORT, () => console.log(`Listening oon ${PORT}`));