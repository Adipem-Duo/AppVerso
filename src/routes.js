const api = require('./apis.js')
const passport = require('./config/passport');

const middlewares = async (app) => {  
    
    app.post('/signup', api.user.save)
    app.post('/signin', api.auth.signin)
    app.post('/validateToken', api.auth.validateToken)

    app.route('/users')
        .all(passport())

}
module.exports = middlewares;