const express = require('express')
const app = express()

const data = {
  integrantes: [
    { nome: 'Hevelyn Leivas' },
    { nome: 'Maisa Grundler' },
    { nome: 'Isadora Custodio Lopes' }
  ]
}

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})