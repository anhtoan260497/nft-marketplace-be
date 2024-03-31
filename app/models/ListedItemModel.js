const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListedItemModel = new Schema({
    seller : String,
    nftAddress : String,
    tokenId : Number,
    price : Number,
    chainId : String
})

module.exports = mongoose.model('ListedItems',ListedItemModel)