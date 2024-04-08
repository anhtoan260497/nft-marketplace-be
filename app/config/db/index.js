const mongoose = require('mongoose')
require('dotenv').config()
const connect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nft-marketplace.66mxt7g.mongodb.net/`,{
      // useNewUrlParser: true,
      // useUnfiedTopology: true
    })
    console.log('Connect successfully!')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connect }

