const app = require('express')();

//------------ função async 
const configurateMiddlewares = require('./src/config/config.js');
const configureEndPoints = require('./src/routes.js');
const swaggerDoc = require('./src/config/swaggerDocs');



const { setLatestsMigration }   = require('./db/knex')

const bootstrap = async (app) => {
    await setLatestsMigration(app);
    await configurateMiddlewares(app);
    await configureEndPoints(app);
    await swaggerDoc(app);
}

bootstrap(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
module.exports = app;