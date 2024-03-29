const Wallet = require("../models/Wallet")

class WalletController {
    index(req, res) {
        Wallet.find({}).then(result => res.json(result))
    }
}

module.exports = new WalletController