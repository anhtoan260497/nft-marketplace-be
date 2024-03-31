const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes')
const db = require('./app/config/db')
const runMoralis = require('./moralis/moralis')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

routes(app)
db.connect()
// runMoralis()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})