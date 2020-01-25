const authScret = process.env.AUTH_SECRET
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs')
const { db } = require('../../db/knex');

const signin = async (req, res) => {
    if (!req.body.email && !req.body.password) return res.status(400).send('Informe o Email e a Senha');
    if (!req.body.email) return res.status(400).send('Informe o Email')
    if (!req.body.password) return res.status(400).send('Informe a Senha');
    

    const user = await db('usuario')
        .where({ email: req.body.email })
        .first()
    
    if (!user) return res.status(400).send('Usuário não encontrado');

    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) return res.status(401).send('Senha inválida!');

    const now = Math.floor(Date.now() / 1000);

    const payload = { 
        id: user.id,
        nome: user.nome,
        email: user.email,
        iat: now,
        exp: now + (60 * 60 * 24 * 3)
    }
    let token =jwt.encode(payload, authScret)
    res.json({
        ...payload,
        token
    }).header('Authorization', 'Bearer ' + token);
    
}

const validateToken = async (req, res) => {
    const userData = req.body || null
    try {
        if (userData) {
            const token = jwt.decode(userData.token, authScret)
            if (new Date(token.exp * 1000) > new Date()) {
                return res.send(true)
            }
        }
    } catch (e) {
        // problema com o token
    }
    res.send(false)
}

module.exports = { signin, validateToken }

