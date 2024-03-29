const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes')
const db = require('./app/config/db')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routes(app)
// db.connect()

app.post('/', (req,res) => {
  res.send('heelo')
  console.log(req.body)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})