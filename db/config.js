require('dotenv/config');

module.exports = () => {
        return process.env.DATABASE_URL || {
            host: process.env.MY_HOST,
            user: process.env.MY_USER,
            port: '5432',
            password: process.env.MY_PASS,
            database: process.env.MY_DATABASE
        }
    }
