# ERC20_Token_Sale
1. Created a ERC20 token with the help of Openzeppelin library. The number of tokens that gets created is constant. 
2. The owner of the DApp can whitelist any user by just passing in the address. These whitelisted users can then buy any number of tokens by sending ether. 
3. Non whitelisted users are not allowed to buy tokens.
4. Deployed the application on ganache and Rinkeby test network.

# Project Diagram

<img width="1653" alt="ERC20_Token_Sale" src="https://user-images.githubusercontent.com/10496268/126787301-577282fd-24d5-466b-92da-c73e9d6e5051.png">


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
7. We can either use Ganache or any Test network to deploy the application on blockchain. We use Infura to deploy the app on test networks.




