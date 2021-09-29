const Web3 = require('web3');
const Tx = require("ethereumjs-tx").Transaction;
const rpcURL = "https://ropsten.infura.io/v3/7749a9e617e3415697509cec24c1420a";

const web3 = new Web3(rpcURL);

const account1 = "0x9832a19981655913E13539A1Ef86e63451e948D5";
const privatekey ="8e3abc9e16a2a90e59d006bbd9b572f6cafe2a15ee44216675413d503709aeda";

const privatekeyBuffer = Buffer.from(privatekey,"hex");

const account2 = "0x4C32073163215ECcA5422D2208DA98EBE82Cb3ee";

web3.eth.getTransactionCount(account1, (err, txCount) => {
    if(err){
      console.log("error",err);
    }
    else{
      const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
      }

      const tx = new Tx(txObject, {chain:'ropsten', hardfork:'petersburg'});
      tx.sign(privatekeyBuffer);

      const serializedTx = tx.serialize();
      const raw = '0x' + serializedTx.toString('hex');

      web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if(err){
            console.log("Transaction error", err);
        }
        else{
          console.log("Transaction Hash",txHash);
        }
      }).then(receipt => {
      console.log(receipt);
      })
    }
  })