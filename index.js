const app = require('express')();
const PORT = process.env.PORT || 5000;
const configurateApp = require('./config/config.js');
const middlewares = require('./api/middleware.js');


const start = async (app) => {
    await configurateApp(app);
    await middlewares(app);
}

start(app);

app.listen(PORT, () => console.log(`Listening oon ${PORT}`));
module.exports = app;