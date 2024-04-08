const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes')
const db = require('./app/config/db')
const runMoralis = require('./moralis/moralis')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const ngrok = require('@ngrok/ngrok')
require('dotenv').config()

routes(app)
db.connect()
// runMoralis()

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  
  try {
    const url = await ngrok.connect({
      addr: 8080,
      domain: process.env.DOMAIN,
      authtoken: process.env.AUTH_NGROK
    })
    console.log('Ngrok', url)
  } catch (err) {
    console.log('err', err)
  }
})