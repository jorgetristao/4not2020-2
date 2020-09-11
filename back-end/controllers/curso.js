/*
    OPERAÇÕES BÁSICAS SOBRE DADOS

    1)CREATE (Criação ou inserção)
        Cria um novo objeto dentro do banco de dados
    
    2) RETRIEVE (Recuperar ou listar)
        Obter de volta um ou mais objetos preexistentes no banco de dados

    3) UPDATE 
        Atualizar os dados de um objeto preexistente no banco de dados
    
    4) DELETE
        Exclusão de um objeto do banco de dados

    (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD


    Verbos do protocolo HTTP

    POST   => CREATE
    GET    => RETRIEVE
    PUT    => UPDATE
    DELETE => DELETE

*/

//Controller é um conjunto de funções associadas às operações sobre dados

const Curso = require('../models/Curso')

const controller = {} 

//Operação CREATE, função novo()
controller.novo = async (req, res) => {
    //Usa os dados que chegam dentro do body da requisição
    //e os envia ao banco de dados para a criação de um novo objeto
    try {
        await Curso.create(req.body)
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        let dados = await Curso.find() //find() sem parametros tras tudo.
        res.send(dados) //Vai com status HTTP 200: OK
    }
    catch(erro) {
        console.log(erro)
        res.starus(500).send(erro)
    }
}

//Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try {
        //capturando o parametro id da URL
        const id = req.params.id
        let obj = await Curso.findById(id)

        //O objeto existe e foi encontrado
        if(obj) res.send(obj) //HTTP 200
        //Não encontrado
        else res.status(404).end() //HTTP 404: Not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller