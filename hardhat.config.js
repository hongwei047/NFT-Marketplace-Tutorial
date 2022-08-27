require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  networks: {
    goerli: {
      url: process.env.https://eth-goerli.g.alchemy.com/v2/2LFrhfJtkHqSXToAdm85D1FdluL_Qv5o,
      accounts: [process.env.1ce56294cf9de63c261bfe0dcd7124bcc5655a32ccfd95f1331a103ad3944c12]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};