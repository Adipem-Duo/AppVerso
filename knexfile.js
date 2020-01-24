require('dotenv/config');
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.MY_HOST,
      user: process.env.MY_USER,
      port: '5432',
      password: process.env.MY_PASS,
      database: process.env.MY_DATABASE
    },

    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },

    production: {
      client: 'postgresql',
      connection: {
        database: process.env.MY_PROD_DB,
        user: process.env.MY_PROD_USER,
        password: process.env.MY_PROD_PASS
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }
}

