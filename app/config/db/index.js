const mongoose = require('mongoose')
const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hardhat-network-marketplace',{
      // useNewUrlParser: true,
      // useUnfiedTopology: true
    })
    console.log('Connect successfully!')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connect }