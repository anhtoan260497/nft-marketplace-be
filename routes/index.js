const walletRoute = require('./wallet')

const routes = (app) => {
 app.use('/wallet', walletRoute)
}

module.exports = routes