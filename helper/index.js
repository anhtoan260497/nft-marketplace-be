const Moralis = require("moralis").default;
const { ethers } = require("ethers");
const nftMarketplace = require('../abi/nftMarketplace.json')

const createStream = async (chainIds, description, tag, topic, webhookUrl, nftMarketplaceContractAddress, streamName = '') => {
    const optionConfig = {
        chains: [...chainIds], // list of blockchains to monitor
        description, // your description
        tag, // give it a tag
        abi: nftMarketplace,
        includeContractLogs: true,
        topic0: [topic], // topic of the event
        webhookUrl, // webhook url 
    }

    const stream = await Moralis.Streams.add(
        {
            ...optionConfig,
        })

    await Moralis.Streams.addAddress(
        {
            id: stream.raw.id,
            address: nftMarketplaceContractAddress
        }
    )

    console.log(`created event ${streamName} stream `)
}

const decodeLogs = (respone) => {
    return Moralis.Streams.parsedLogs(respone);
}

const formatEtherCustom = (value, decimals = 0) => {
   return ethers.formatUnits(value.toString(), decimals)
}



module.exports = { createStream, decodeLogs, formatEtherCustom }