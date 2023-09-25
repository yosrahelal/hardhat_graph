// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    
    const LOCK = await hre.ethers.getContractFactory("Lock");

    const contract = await LOCK.attach(
        "0x1c727A6b4aCcF896081AD273c5f0Bb2d05C54e4A" // The deployed contract address
    );
    
    const tx = await contract.withdraw();
    tx.wait();

    console.log(`Withdraw hash transaction ` + tx.hash);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
