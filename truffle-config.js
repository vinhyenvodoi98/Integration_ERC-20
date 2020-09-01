const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
  networks: {
    ropsten: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC,
        `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`)
      },
      network_id: '*',
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
}