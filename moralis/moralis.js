const { createStream } = require("../helper");

const Moralis = require("moralis").default;

const runMoralis = async () => {

    const webhookUrl = 'https://47b1-14-161-6-134.ngrok-free.app'
    const nftMarketplaceContractAddress = '0x022D9Aa94E047E3D9b5F9e6813cA394ef01e5C99'

    await Moralis.start({
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjkyYTg3YmRmLTFhM2QtNDlhMy1iYmQxLTY2M2M3ZjdhODk2MSIsIm9yZ0lkIjoiMzg0MDMzIiwidXNlcklkIjoiMzk0NTk2IiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiJmODYwODg1ZS0xOTcxLTRkMTAtYWM3Ny1jZTU5NzAyY2U5M2QiLCJpYXQiOjE3MTEwOTc1NzAsImV4cCI6NDg2Njg1NzU3MH0.pSGg0H0xfvkm7MsRsbr2z-VSB0XVtor3OfZy4Kdeznc",
    });

    await createStream(['0xaa36a7'], 'stream watch list item event', 'NFT list item event',
        'ItemList(address,address, uint256, uint256)', `${webhookUrl}/nft/list-item`, nftMarketplaceContractAddress, 'list item')

    // await createStream(['0xaa36a7'], 'stream watch buy item event', 'NFT buy item event',
    //     'ItemBought(address,address, uint256, uint256)', webhookUrl, nftMarketplaceContractAddress, 'buy item')

    // await createStream(['0xaa36a7'], 'stream watch update item event', 'NFT update item event',
    //     'ItemUpdate(address, uint256, address, uint256)', webhookUrl, nftMarketplaceContractAddress, 'update item')

    // await createStream(['0xaa36a7'], 'stream watch cancel item event', 'NFT cancel item event',
    //     'ItemCancel(address, uint256, address)', webhookUrl, nftMarketplaceContractAddress, 'cancel item')
};

module.exports = runMoralis





