const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xf6f6892b6A71299a3E5a961fa37039E9baa3A1C0"; 
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x891f50B7CdAB2F3595B72b78355A3288967b67D9"; 


async function main() {
  try {
    const tokenContract = await hre.ethers.getContractAt(
      tokenABI,
      tokenAddress
    );
    const fxContract = await hre.ethers.getContractAt(
      fxRootContractABI,
      FxERC721RootTunnel
    );

    const tokenIds = [0, 1, 2];

    const approveTx = await tokenContract.setApprovalForAll(
      FxERC721RootTunnel,
      true
    );
    await approveTx.wait();
    console.log("Approval confirmed");

    for (let i = 0; i < tokenIds.length; i++) {
      const depositTx = await fxContract.deposit(
        tokenAddress,
        walletAddress,
        tokenIds[i],
        "0x6556"
      );
      await depositTx.wait();
      console.log(`Token with ID ${tokenIds[i]} deposited`);
    }

    // Test balanceOf
    const balance = await tokenContract.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
