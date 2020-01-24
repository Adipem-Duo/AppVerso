const connection = require('./config.js');
const knex = require('knex')({
    client: 'postgres',
    connection,
    useNullAsDefault: true
});
if (process.env.DATABASE_URL != null) {
    knex.migrate.latest();
}
module.exports = knex;