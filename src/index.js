const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

const data = {
  integrantes: [
    { nome: 'Nome Sobrenome' },
    { nome: 'Nome Sobrenome' },
    { nome: 'Nome Sobrenome' }
  ]
}

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

app.get('/integrantes', (req, res) => {
  res.json(data)
})

