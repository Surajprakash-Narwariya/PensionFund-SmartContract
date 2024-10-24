// const Web3 = require('web3');
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545'); // Connecting to Ganache or your local blockchain
const PensionFund = artifacts.require('PensionFund');
// The contract address where you're sending Ether

async function sendEther(callback) {
    const pf = await PensionFund.deployed();
    const depositAmount = web3.utils.toWei('5', 'ether');
    const depositGasEstimate = await pf.deposit.estimateGas();
    console.log(`Estimated gas for deposit: ${depositGasEstimate}`);
    const sending = await pf.deposit({ value: depositAmount });
    console.log(sending);
    console.log();
    console.log();
    const balance = await pf.getBalance();
    console.log(
        'Current Ether in the Contract is ',
        web3.utils.fromWei(balance.toString(), 'ether')
    );
}

async function withdrawEthers(callback) {
    const pf = await PensionFund.deployed();
    const sending = await pf.withdraw();
    console.log(sending);
    console.log();
    console.log();
    const balance = await pf.getBalance();
    console.log(
        'Current Ether in the Contract is ',
        web3.utils.fromWei(balance.toString(), 'ether')
    );
}

module.exports = function (callback) {
    sendEther(callback);
};
