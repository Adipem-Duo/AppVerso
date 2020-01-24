const app = require('express')();
const PORT = process.env.PORT || 5000;
const configurateMiddlewares = require('./src/config/config.js');
const configureEndPoints = require('./src/routes.js');
const swaggerDoc = require('./swaggerDocs');

const start = async (app) => {
    await configurateMiddlewares(app);
    await configureEndPoints(app);
    await swaggerDoc(app);
}

start(app);

app.listen(PORT, () => console.log(`Listening oon ${PORT}`));
module.exports = app;