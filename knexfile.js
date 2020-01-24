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
    migrations: {
      directory: './db/migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

