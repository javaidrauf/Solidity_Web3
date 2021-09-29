const Web3 = require ("web3");
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";
// const rpcURL = "https://127.0.0.1:7545"; //ganache url for local network
const account = "0x9832a19981655913E13539A1Ef86e63451e948D5";

const web3 = new Web3(rpcURL);

//  check rospten account balance
web3.eth.getBalance(account, (err, wei) => {

    console.log("Balance in wei:",wei);

    balance = web3.utils.fromWei(wei,'ether');

    console.log("Balance in ether:", balance);
})