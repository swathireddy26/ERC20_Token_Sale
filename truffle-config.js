const { version } = require("os");
const path = require("path");

require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 8545,
      network_id: 1337,
      host: "127.0.0.1"
    },
    ganache_local: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545", MetaMaskAccountIndex )
      },
      network_id: 1337
    },
    ropsten_infura: {
        provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/5e0ec9d59f7b47f0a77d19f65a0e38b1", MetaMaskAccountIndex)
        },
        network_id: 3
    },
    goerli_infura: {
        provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/5e0ec9d59f7b47f0a77d19f65a0e38b1", MetaMaskAccountIndex)
        },
        network_id: 5
    }
  },
  compilers: {
    solc: {
      version: "0.6.5"
    }
  }
};
