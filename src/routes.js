const express = require('express');
const routes = express.Router();
const ClassController = require('./controllers/ClassController');

routes.get('/turmas', ClassController.index);
routes.get('/turma/:id', ClassController.show);
routes.post('/turmas', ClassController.store);
routes.put('/turma/:id', ClassController.update);
routes.delete('/turma/:id', ClassController.remove);

module.exports = routes;