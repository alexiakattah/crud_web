const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StudentSchema = new mongoose.Schema({
  nome_aluno: {
    type: String,
    required: true,
  },
  data_matricula: {
    type: String,
    required: true,
  },
  id_turma: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


//Registrando models na base de dados
StudentSchema.plugin(mongoosePaginate);
mongoose.model('Turmas', StudentSchema); 