const cors = require('cors');
const bodyParser = require('body-parser');

const configurateApp = async (app) => {
    app.use(bodyParser.json());
    app.use(cors());
}

module.exports = configurateApp;
