const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcURL);

const ABI = [
	{
		"inputs": [],
		"name": "newkeyWord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contractAddress = "0x311e5d94f50BE3ac7CFDc8dD55B7d50E17814b94";


const contract = new web3.eth.Contract(ABI,contractAddress);

contract.methods.newkeyWord().call((err,result) => {
    if(!err){
        console.log('Result from contract', result);
    }
})




