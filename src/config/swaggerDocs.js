const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            openapi: "3.0",
            title: "AppVerso",
            version: '2.0.0',
            description: 'Nada do que você tentar usar abaixo eu te garanto que irá funcinoar, mas deve funcionar da ' +
            'mas deveria funcionar do jeito que está especificado, teje avisado xD',
        }
    },
    apis:['./src/routes.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}