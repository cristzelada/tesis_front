const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.get('/clasificar', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/clasificar.html'))
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/login.html'))
})

app.post('/login', function (req, res) {
  const { user, password } = req.body
  if (user !== 'diego' || password !== 'password') {
    return res.status(401).json({
      msg: 'Credenciales incorrectas'
    })
  }
  res.json({
    token: 'dsnf2323jnkj23sdf23'
  })
})

app.listen(port, () => {
  console.log('App listen on port: ', port)
})
