const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            openapi: "3.0",
            title: "test API",
            version: '2.0.0',
            description: 'Just testing an swagger documentation',
        }
    },
    apis:['./src/routes.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}