pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Slayer Token", "SLAY") public {
        _mint(msg.sender, initialSupply); //We are giving initial supply to the person who creates(mints) the token
        _setupDecimals(0);
    }
}

