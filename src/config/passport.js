const authSecret = process.env.AUTH_SECRET
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt
const { db } = require('../../db/knex.js')

const params = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, (payload, done) => {
    db('usuario')
        .where({ id: payload.id })
        .first()
        .then(user => done(null, user ? { ...payload } : false))
        .catch(err => done(err, false))
})

passport.use(strategy)

module.exports = () => passport.authenticate('jwt' ,{ session: false });