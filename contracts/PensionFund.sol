// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PensionFund {
    address public ownerAddr;
    uint256 public unlockTime;

    // Events
    event Deposited(address indexed sender, uint amount, uint256 unlockTime);
    event Withdrawn(address indexed owner, uint amount);


    constructor(uint256 _unlockTimeInSeconds) {
        ownerAddr = msg.sender;
        unlockTime = block.timestamp + _unlockTimeInSeconds; // Lock funds until specified time
    }

    function deposit() public payable {
        require(msg.sender == ownerAddr, "Only owner can deposit funds");
        emit Deposited(msg.sender, msg.value, unlockTime);
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "Funds are locked until unlock time");
        require(msg.sender == ownerAddr, "Only owner can withdraw funds");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available for withdrawal");

        payable(owner).transfer(balance);
        emit Withdrawn(owner, balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
