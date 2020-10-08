const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TurmaSchema = new mongoose.Schema({
  nome_turma: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  id_aluno: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


//Registrando models na base de dados
TurmaSchema.plugin(mongoosePaginate);
mongoose.model('Turmas', TurmaSchema); 