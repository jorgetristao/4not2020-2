const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    capacidade: { type: Number, default: 20 },
    recursos_didaticos: { type: String }
})

/*
Parâmetros de método mongoose.model()
1º -> Nome do modelo (sempre igual ao nome do arquivo)
2º -> Estrutura(esquema) do modelo
3º -> Nome da coleção (collection) em que os objetos criados no modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')