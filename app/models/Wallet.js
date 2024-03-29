const mongoose = require('mongoose')
const Shcema = mongoose.Schema

const Wallet = new Shcema({
    address: {
        type: String,
    },
    balance: {
        [Number]: {
            decimals: Number,
            nonDecimals : Number
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('wallets', Wallet)