// contracts/ContractA.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractCaller {
    address public sender;
    address public origin;

    // Using `call` to invoke logSender in ContractB
    function callLogSender(address contractB) external returns (address, address) {
        (bool success, bytes memory data) = contractB.call(abi.encodeWithSignature("logSender()"));
        require(success, "Call failed");
        (sender, origin) = abi.decode(data, (address, address));
        return (sender, origin);
    }

    // Using `delegatecall` to invoke logSender in ContractB
    function delegatecallLogSender(address contractB) external returns (address, address) {
        (bool success, bytes memory data) = contractB.delegatecall(abi.encodeWithSignature("logSender()"));
        require(success, "Delegatecall failed");
        (sender, origin) = abi.decode(data, (address, address));
        return (sender, origin);
    }
}
