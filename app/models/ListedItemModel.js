const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')

const ListedItemModel = new Schema({
    seller : String,
    nftAddress : String,
    tokenId : Number,
    price : String,
    priceFormat : Number,
    chainId : String
})

ListedItemModel.plugin(mongooseDelete)

module.exports = mongoose.model('ListedItems',ListedItemModel)