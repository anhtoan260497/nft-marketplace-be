const { decodeLogs, formatEtherCustom } = require("../../helper");
const ListedItemModel = require("../models/ListedItemModel");

class listItemControler {
    async postItem(req, res) {
        try {
            if (!req.body.confirmed || req.body.logs.length === 0) {
                res.send('done')
                return
            }
            const parseData = decodeLogs(req.body)
            const listItem = new ListedItemModel({
                ...parseData[0],
                tokenId: formatEtherCustom(parseData[0].tokenId),
                price: formatEtherCustom(parseData[0].price, 18),
                chainId: req.body.chainId
            })
            console.log('listitem', listItem)
            await listItem.save()
            res.send('done')
        } catch (err) {
            console.log(err)
        }
    }

    async getItem(req, res) {
        try {
            const listItems = await ListedItemModel.find({ chainId: req.params.chainId })
            res.json(listItems)
        } catch (err) {
            console.log(err)
            res.status(404).json({ message: 'error' })
        }
    }
}

module.exports = new listItemControler