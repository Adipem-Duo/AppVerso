const connection = require('./config.js');
const knex = require('knex')({
    client: 'postgres',
    connection,
    useNullAsDefault: true
});

exports.setLatestsMigration = async () =>{
    if (process.env.NODE_ENV === 'production')
        knex.migrate.latest();
}
exports.db = knex;
