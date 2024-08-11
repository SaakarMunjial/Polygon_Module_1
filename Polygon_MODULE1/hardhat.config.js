require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/zK0yNG-iVVjOYHoGRjwS5bX9zxQe-c6d",
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/zK0yNG-iVVjOYHoGRjwS5bX9zxQe-c6d",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
