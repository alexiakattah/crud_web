const mongoose = require('mongoose');
var Turmas = require('../models/Turmas.js');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query; //obtem o parâmetro 'page' informado no GET                
    const turmas = await Turmas.paginate({}, { page, limit: 10 });

    return res.json(turmas);
  },

  async show(req, res) {
    const classes = await Turmas.findById(req.params.id);

    return res.json(classes);
  },

  async store(req, res) {
    const classes = await Turmas.create(req.body);

    return res.json(classes);
  },

  async update(req, res) {
    const classes = await Turmas.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(classes);
  },

  async remove(req, res) {
    await Turmas.findByIdAndRemove(req.params.id);

    return res.send();
  }
};