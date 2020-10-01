const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: { type: String, required: true },
   cpf: { type: String, required: true, index: { unique: true } },
   rg: { type: String, required: true },
   endereco: { type: String, required: true },
   telefone: { type: String, required: true },
   email: { type: String, required: true },
   mensalidade: { type: Number, required: true },
   data_pagamento: { type: Date, required: true },
   personal: { type: mongoose.ObjectId, ref: 'Funcionario', required: true }
})

/*
Parâmetros de método mongoose.model()
1º -> Nome do modelo (sempre igual ao nome do arquivo)
2º -> Estrutura(esquema) do modelo
3º -> Nome da coleção (collection) em que os objetos criados no modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Aluno', esquema, 'aluno')