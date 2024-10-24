// contracts/ContractB.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractCalled {
    address public sender;
    address public origin;

    // This function will log msg.sender and tx.origin
    function logSender() external returns (address, address) {
        sender = msg.sender;
        origin = tx.origin;
        return (sender, origin);
    }
}
