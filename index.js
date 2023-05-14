const express = require('express')
const app = express();
const categorias = require('./controllers/categoriasController')

app.use(express.json());
app.use(categorias)
app.listen('3002',()=>{
    console.log('esta online')
})