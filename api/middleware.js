const api = require('./apis.js')


const middlewares = async (app) => {
    app.get('/signup',api.user.save)


}



module.exports = middlewares;