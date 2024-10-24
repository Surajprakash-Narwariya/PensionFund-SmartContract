const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545'); // Connecting to Ganache or your local blockchain
const ContractCaller = artifacts.require('ContractCaller');
const ContractCalled = artifacts.require('ContractCalled');

async function PrintCaller(callback) {
    let contractA = await ContractCaller.deployed();
    let contractB = await ContractCalled.deployed();

    // Using call to interact with ContractB
    await contractA.callLogSender(contractB.address);
    console.log('After Call:');
    console.log('Sender:', await contractA.sender());
    console.log('Origin:', await contractA.origin());

    // Using delegatecall to interact with ContractB
    await contractA.delegatecallLogSender(contractB.address);
    console.log('After Delegatecall:');
    console.log('Sender:', await contractA.sender());
    console.log('Origin:', await contractA.origin());
}

module.exports = function (callback) {
    PrintCaller(callback);
};
