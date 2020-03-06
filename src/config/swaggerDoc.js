const swaggerSpecs = require('./swaggerSpecs.json');
const swaggerUi = require('swagger-ui-express');

module.exports = server => {
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};
