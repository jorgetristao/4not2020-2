var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbName = process.env.DB_NAME
const dbPass = process.env.DB_PASS
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.tetsv.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const funcionario = require('./routes/funcionario')
app.use('/funcionario', funcionario)

const aluno = require('./routes/aluno')
app.use('/aluno', aluno)

const avaliacao = require('./routes/avaliacao')
app.use('/avaliacao', avaliacao)

const treino = require('./routes/treino')
app.use('/treino', treino)

const pagamento = require('./routes/pagamento')
app.use('/pagamento', pagamento)

module.exports = app