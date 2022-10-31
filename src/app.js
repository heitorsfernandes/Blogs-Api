const express = require('express');

// ....
const controllers = require('./controllers/controller.login');
const { validationLogin } = require('./middlewares/validationLogin');

const app = express();

app.use(express.json());

app.post('/login', validationLogin, controllers.login );

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
