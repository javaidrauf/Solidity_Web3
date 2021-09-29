const Web3 = require("web3");
var Tx = require('ethereumjs-tx');
const rpcUrl = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcUrl);

const account = "0x9832a19981655913E13539A1Ef86e63451e948D5";
const privatekey ="8e3abc9e16a2a90e59d006bbd9b572f6cafe2a15ee44216675413d503709aeda";
const privateKeyBuffer = Buffer.from(privatekey, "hex");

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
        const txCount = await web3.eth.getTransactionCount(account);
        const txObj = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddres,
            data: contract.methods.store(19).encodeABI(),
            gasLimit: web3.utils.toHex(300000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
        }

        const tx = new Tx.Transaction(txObj, { chain: "ropsten", hardfork: "petersburg" });
        tx.sign(privateKeyBuffer);
        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');
        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("signedTransaction", signedTransaction)
    }
    catch (error) {
        console.log("error", error)
    }
}

contractMehodAsync()