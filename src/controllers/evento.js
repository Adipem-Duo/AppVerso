const { db } = require('../../db/knex');
const save = async (req, res) => {
    
    const user = req.body;
    try {
    //....    
    } catch (ex) {
        
    }

    await db('usuario').insert(user);
    res.send("usuario cadastrado com sucesso").status(200);

}


module.exports = { save }