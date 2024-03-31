const nftRoutes = require('./nfts')

const routes = (app) => {
 app.use('/nft', nftRoutes)
}

module.exports = routes