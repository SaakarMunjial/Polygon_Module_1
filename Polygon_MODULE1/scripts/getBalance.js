const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x49E5B26477C9dEF2DB882F966F7cc57689b0f133"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x891f50B7CdAB2F3595B72b78355A3288967b67D9"; // place your public address for your wallet here

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
