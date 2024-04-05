const { decodeLogs, formatEtherCustom } = require("../../helper");
const ListedItemModel = require("../models/ListedItemModel");

class listItemControler {
    async postItem(req, res) {
        console.log('list item', req.body)
        try {
            if (!req.body.confirmed || req.body.logs.length === 0) {
                res.send('done')
                return
            }
            const parseData = decodeLogs(req.body)
            const listItem = new ListedItemModel({
                ...parseData[0],
                tokenId: formatEtherCustom(parseData[0].tokenId),
                price: parseData[0].price,
                priceFormat: formatEtherCustom(parseData[0].price, 18),
                chainId: req.body.chainId
            })
            await listItem.save()
            res.send('done')
        } catch (err) {
            console.log(err)
        }
    }

    async getItem(req, res) {
        try {
            const listItems = await ListedItemModel.find({ chainId: req.params.chainId, deleted: false })
            res.json(listItems)
        } catch (err) {
            console.log(err)
            res.status(404).json({ message: 'error' })
        }
    }

    async buyItem(req, res) {
        let restoreFlag = null
        if (!req.body.confirmed) {
            const parseData = decodeLogs(req.body)
            const item = await ListedItemModel.findOne({ tokenId: parseData[0].tokenId, chainId: req.body.chainId, nftAddress: parseData[0].NftAddress })
            console.log('not confirmed', item)
            await item.delete()

            if (restoreFlag) return;
            restoreFlag = setTimeout(async () => {
                const item = await ListedItemModel.findOne({ tokenId: parseData[0].tokenId, chainId: req.body.chainId, nftAddress: parseData[0].NftAddress })
                if(item) await item.restore()
            }, 1800000);

            return
        }

        if (req.body.confirmed) {
            if(restoreFlag) clearTimeout(restoreFlag)
            const parseData = decodeLogs(req.body)
            await ListedItemModel.deleteOne({ tokenId: parseData[0].tokenId, chainId: req.body.chainId, nftAddress: parseData[0].NftAddress })
        }
        res.send('Done')
    }
}

module.exports = new listItemControler