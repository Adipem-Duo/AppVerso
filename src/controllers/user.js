const bcrypt = require('bcrypt-nodejs')
const { existsOrError, notExistsOrError, equalsOrError } = require('../config/utils');
const { db } = require('../../db/knex')
const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const save = async (req, res) => {
    const user = { ...req.body };
    if (req.params.id) user.id = req.params.id
    

    try {
        existsOrError(user.nome, 'Nome não informado')
        existsOrError(user.email, 'E-mail não informado')
        existsOrError(user.password, 'Senha não informada')
        existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
        equalsOrError(user.password, user.confirmPassword,
            'Senhas não conferem')

        const userFromDB = await db('usuario')
            .where({ email: user.email }).first()
        if(!user.id) {
            notExistsOrError(userFromDB, 'Usuário já cadastrado')
        }

    } catch(msg) {
        return res.status(400).send(msg)
    }

    user.password = encryptPassword(user.password)
    delete user.confirmPassword

    if(user.id) {
        db('usuario')
            .update(user)
            .where({ id: user.id })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    } else {
        db('usuario')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }
}

module.exports = { save };