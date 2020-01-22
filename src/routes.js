const api = require('./apis.js')


const middlewares = async (app) => {
    /**
     * @swagger
     * /user:
     *  get:
     *    description: this will return all users
     */
    app.get('/signup',api.user.save)
}



module.exports = middlewares;