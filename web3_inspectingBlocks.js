const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcURL);

// get latest block number
web3.eth.getBlockNumber().then(console.log);

// get latest block
web3.eth.getBlock('latest').then(console.log);

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
    for (let i =0; i < 10; i++){
        web3.eth.getBlock(latest -1).then(console.log)
    }
})

// get transaction from specific number
const hash ="0xad6d667f2e482c7a50e03c2035c5f5adaef925502ee23f0d97da5a2cdfc6b47f";
web3.eth.getTransactionFromBlock(hash,2).then(console.log);

web3.eth.getBlock('latest').then((b) => {console.log(b.hash)});



