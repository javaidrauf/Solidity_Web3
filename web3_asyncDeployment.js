// Deployment of contract through web3 using async
const Web3 = require('web3');
const Tx = require("ethereumjs-tx");
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcURL);

const account = "0x9832a19981655913E13539A1Ef86e63451e948D5";
const privatekey ="8e3abc9e16a2a90e59d006bbd9b572f6cafe2a15ee44216675413d503709aeda";

const byteCode = "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033";

const byteCodeBuffer = Buffer.from(byteCode,"hex");
const privatekeyBuffer = Buffer.from(privatekey,"hex");

const contractDeployAsync = async() => {
    try{
        const txCount = await web3.eth.getTransactionCount(account);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            data: byteCodeBuffer,
            gasLimit: web3.utils.toHex(300000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }
        const tx = new Tx.Transaction(txObject,{chain:"ropsten", hardfork:"petersburg"});
        tx.sign(privatekeyBuffer);

        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');

        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("signedTransaction", signedTransaction)
 
    }
    catch(error){
        console.log("error",error)
    }
}

contractDeployAsync()


