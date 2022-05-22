require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'ALCHEMPY_APPLICATION_API_KEY',
      accounts: ['META_MASK_API_PRIVATE_KEY'],
      
    },
  },
};
