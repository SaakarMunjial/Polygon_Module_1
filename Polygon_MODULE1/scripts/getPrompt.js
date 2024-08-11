const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xf6f6892b6A71299a3E5a961fa37039E9baa3A1C0"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x891f50B7CdAB2F3595B72b78355A3288967b67D9"; 

async function main() {
  const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

  for (let i = 0; i < count; i++) {
    const tokenID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
    const prompt = await myContract.promptDescription(tokenID);
    console.log(`NFT with TokenID ${tokenID.toString()} has prompt: ${prompt}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
