require("@nomiclabs/hardhat-waffle");

const MAINNET_API_KEY = "...";
const RINKEBY_API_KEY = "...";
const MAINNET_PRIVATE_KEY = "...";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${MAINNET_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_API_KEY}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    }
  }
};

