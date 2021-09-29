const _ = require('underscore');
const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";
const web3 = new Web3(rpcURL);

// Get average gas price in wei from last few blocks median gas price
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
  });

// Use sha256 Hashing function
console.log(web3.utils.sha3('Dapp Univerisity'));

// Use keccak256 Hashing function (alias)
console.log(web3.utils.keccak256('Dapp University'));

// Get a Random Hex
console.log(web3.utils.randomHex(0));

// Get access to the underscore JS library
_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
  console.log(key)
})

  