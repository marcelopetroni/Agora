// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {
    struct Donation {
        address donor;
        uint256 amount;
    }

    Donation[] public donations;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        donations.push(Donation(msg.sender, msg.value));
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getDonations() public view returns (Donation[] memory) {
        return donations;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
