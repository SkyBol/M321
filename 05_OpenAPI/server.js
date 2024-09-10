const express = require('express');
const swaggerUi = require('swagger-ui-express');
const OpenApiValidator = require('express-openapi-validator');
const YAML = require('yamljs');
const OpenAPI = require('express-openapi');

const app = express();
const port = 8080;

const swaggerDocument = YAML.parse('./openapi/openapi-books.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

OpenAPI.initialize({
    apiDoc: swaggerDocument,
    app,
    paths: path.join(__dirname, 'paths')
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});