require("./instrument.js");

const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');

const routes = require('./endpoints.js');

const app = express();

/* Middlewares */
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const Sentry = require("@sentry/node");
const port = 3001;

// Use as rotas de endpoints.js
app.use(cors());
app.use(express.json());
app.use('/', routes);

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
