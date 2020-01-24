const api = require('./apis.js')


const middlewares = async (app) => {
    /**
     * @swagger
     * /signup:
     *      post:
     *      description: esse endpoit deverá cadastrar um usuário
     *      consumes:
     *      - "application/json"
     *      produces:
     *      - "application/json"
     *      parameters:
     *      - in: "body"
     *      name: "email"
     *    
     */
    app.get('/signup',api.user.save)
}



module.exports = middlewares;