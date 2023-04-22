const { ethers } = require("hardhat");

async function main() {
  const moodContract = await ethers.getContractFactory("CAN");

  const deployedContract = await moodContract.deploy("CANToken", "CAN");

  await deployedContract.deployed();

  console.log("Contract address: ", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
