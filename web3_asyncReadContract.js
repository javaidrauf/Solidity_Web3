const Web3 = require("web3");
const rpcUrl = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";
const web3 = new Web3(rpcUrl);

const contractAddres = "0xcD46652B3074137D71A4886B652fE4604Df785A0";
const contractAbi = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contractMehodAsync = async () => {
    try {
        const contract = new web3.eth.Contract(contractAbi, contractAddres);
        const retrieve = await contract.methods.retrieve().call();
        console.log("retrieve", retrieve)
    }
    catch (error) {
        console.log("error", error)
    }
}

contractMehodAsync()