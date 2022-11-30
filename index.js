// JWT
// require("dotenv-safe").config();
// const jwt = require('jsonwebtoken');
// var { expressjwt: expressJWT } = require("express-jwt");
const cors = require('cors');
//const {decrypt,encrypt}= require('./criptografia')
var cookieParser = require('cookie-parser')

const express = require('express');
const { usuario, produto } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
// app.use(
//   expressJWT({
//     secret: process.env.SECRET,
//     algorithms: ["HS256"],
//     getToken: req => req.cookies.token
//   }).unless({ path: ["/autenticar", "/logar", "/listar", "/deslogar", "/produtos"] })
// );


app.get('/produtos', async function (req,res){
  const produtos = await produto.findAll();
  res.json(produtos)
})

app.get('/cadastrar', async function(req, res){
  res.render("usuarios/cadastrar")
})

app.post('/cadastro', async function(req, res){
  let {senha, ...user} = req.body;
  const cript = encrypt(senha);
const usuario_ = await usuario.create({
  ...user,
  senha:cript
})
  res.json(usuario_)
})


app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});