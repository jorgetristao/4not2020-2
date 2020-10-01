const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   exercicio: { type: String, required: true },
   repeticoes: { type: String, required: true },
   aluno: { type: mongoose.ObjectId, ref: 'Aluno', required: true }
})

/*
Parâmetros de método mongoose.model()
1º -> Nome do modelo (sempre igual ao nome do arquivo)
2º -> Estrutura(esquema) do modelo
3º -> Nome da coleção (collection) em que os objetos criados no modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Treino', esquema, 'treino')