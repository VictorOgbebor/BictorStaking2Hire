require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://eth-goerli.alchemyapi.io/v2/-h6VR9gOj4GQXa6Fjy2bTQf1Or1tj--9`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 5
    },
    main: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://eth-goerli.alchemyapi.io/v2/-h6VR9gOj4GQXa6Fjy2bTQf1Or1tj--9`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 1
    }
  },
  contracts_directory: './src/backEnd/contracts/',
  contracts_build_directory: './src/backEnd/abis/',
  migrations_directory: './src/backEnd/migrations/',
  test_directory: './src/backEnd/test/',
  compilers: {
    solc: {
      version: "^0.5.17",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}