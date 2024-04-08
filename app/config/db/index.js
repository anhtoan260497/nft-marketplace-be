const mongoose = require('mongoose')
const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://anhtoan260497:dbuser111@nft-marketplace.66mxt7g.mongodb.net/',{
      // useNewUrlParser: true,
      // useUnfiedTopology: true
    })
    console.log('Connect successfully!')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connect }

