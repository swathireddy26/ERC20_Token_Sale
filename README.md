# ERC20_Token_Sale
Created a new crypto currency and performed Tokenization

# Project Diagram



# Reference:
https://ethereum-blockchain-developer.com/060-tokenization/00-overview/

# Tools needed:
1. Truffle box for Local DAPP Developemnt: https://github.com/truffle-box/react-box
2. Metamask for Deploying it in Test networks:  https://metamask.io/
3. Ganache by Truffle for Local blockchain testing:  https://www.trufflesuite.com/ganache

# Installation
1. npm install -g truffle ---> Truffle intsallation
2. truffle unbox react    ---> Unbox the React box

## How to execute the DAPP?
1. Connect ganache to the Metamask using Custom RPC option in Metamask and import the accounts from Ganache
2. Make Sure that Ganache is running Locally (We can start Ganache either with GUI or by using the Ganache-CLI("ganache-cli --port 7545 --chainId 5777")
3. Run the React Application using "npm run start", this will start our React application in localhost:3000
4. the Application will create some amount of tokens
5. Owner can whitelist the addresse by supplying the address and clicking on add address to whielist, If the transaction goes through then the address is whitelisted.
6. Only whitelisted addresses can buy tokens by clicking on buy tokens. When other addresses which are not whitelisted tries to buy tokens, Those transactions are rejected.


