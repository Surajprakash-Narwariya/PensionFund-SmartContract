const PensionFund = artifacts.require('PensionFund');

// module.exports = function (deployer) {
//     const unlockTimeInSeconds = 60 * 5; // Lock for 5 minute
//     deployer.deploy(PensionFund, unlockTimeInSeconds);
// };

// migrations/2_deploy_contracts.js
const ContractCaller = artifacts.require('ContractCaller');
const ContractCalled = artifacts.require('ContractCalled');

module.exports = function (deployer) {
    deployer.deploy(ContractCalled);
    deployer.deploy(ContractCaller);
    const unlockTimeInSeconds = 60 * 5; // Lock for 5 minute
    deployer.deploy(PensionFund, unlockTimeInSeconds);
};
