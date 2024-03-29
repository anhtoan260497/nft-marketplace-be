const Moralis = require("moralis").default;

const runApp = async () => {
    await Moralis.start({
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjkyYTg3YmRmLTFhM2QtNDlhMy1iYmQxLTY2M2M3ZjdhODk2MSIsIm9yZ0lkIjoiMzg0MDMzIiwidXNlcklkIjoiMzk0NTk2IiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiJmODYwODg1ZS0xOTcxLTRkMTAtYWM3Ny1jZTU5NzAyY2U5M2QiLCJpYXQiOjE3MTEwOTc1NzAsImV4cCI6NDg2Njg1NzU3MH0.pSGg0H0xfvkm7MsRsbr2z-VSB0XVtor3OfZy4Kdeznc",
    });

    // const response = await Moralis.Streams.add({
    //     webhookUrl: "https://f876-14-226-242-4.ngrok-free.app", // replace with your own webhook URL
    //     description: "basic_nft",
    //     tag: "mint-basic-nft",
    //     chains: ["0xaa36a7"],
    //     includeContractLogs: true
    // });

    // const moralisResponse = await Moralis.Streams.addAddress({
    //     id: response.toJSON().id, // stream ID from the previous snippet,
    //     address: ['0xA016E19e63Bc24416350A33E7CD42EcbC0167229'],
    // });
    const response = await Moralis.EvmApi.nft.getNFTMetadata({
        "chain": "0xaa36a7",
        "format": "decimal",
        "normalizeMetadata": true,
        "mediaItems": false,
        "address": "0xA016E19e63Bc24416350A33E7CD42EcbC0167229",
        "tokenId": "1"
      });



    console.log(response.raw)
    

    
};

runApp();