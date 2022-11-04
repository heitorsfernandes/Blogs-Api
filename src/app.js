const express = require('express');

// ....
const controllers = require('./controllers/controller.login');
const controllerUser = require('./controllers/controller.user');
const controllerCategories = require('./controllers/controller.categories');
const { validationLogin } = require('./middlewares/validationLogin');
const { validationUser } = require('./middlewares/validationUser');
const { validationToken } = require('./middlewares/validationToken');

const app = express();

app.use(express.json());

app.post('/login', validationLogin, controllers.login);
app.post('/user', validationUser, controllerUser.addUser);
app.get('/user', validationToken, controllerUser.getAllUsers);
app.get('/user/:id', validationToken, controllerUser.getUserById);
app.post('/categories', validationToken, controllerCategories.addCategories);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
