const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcURL);

const contractAddres = "0xa75e26B47Ff881C7140021b3Aab0259b3995d31C";
const contractAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numCaller",
		"type": "event"
	},
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
        const getAllEvent = await contract.getPastEvents("numCaller", {
            fromBlock: 0,
            toBlock: "latest"
        });
        console.log("getAllEvent", getAllEvent)
    }
    catch (error) {
        console.log("error", error)
    }
}

contractMehodAsync()