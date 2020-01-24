const connection = require('./config.js');
const knex = require('knex')({
    client: 'postgres',
    connection,
    useNullAsDefault: true
});
knex.migrate.latest();
module.exports = knex;