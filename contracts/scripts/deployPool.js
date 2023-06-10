const hre = require("hardhat");

async function main() {
    const signers = await hre.ethers.getSigners();

    // Choose the account you want to use from your list
    const deployer = signers[0];
    const alice = signers[1];
    const bob = signers[2];

    console.log("Deploying contracts with the account:", deployer.address);

    const UniOwnPoolFactory = await hre.ethers.getContractAt("UniOwnPoolFactory", "0xbCc32401C1621Fef0033C53570a9930885113276", deployer);
    const UniOwnPool1 = await hre.ethers.getContractAt("UniOwnPassport", "0x4Ee1950F8b44E37f78FF418964316e88791638aC", deployer);
    const UniOwnPool2 = await hre.ethers.getContractAt("UniOwnPool", "0x3F23884507C1c1F7703f363Eb1DDC7C5afD9f2e3", deployer);
    const UniOwnPool3 = await hre.ethers.getContractAt("UniOwnPool", "0x2713bbB2237b34A84e6A25E426a73f0eD072cBA3", deployer);
    const UniOwnPool4 = await hre.ethers.getContractAt("UniOwnPool", "0x0644253DB8F3FC092B1166915efA00C4006047A2", deployer);
    const UniOwnPool6 = await hre.ethers.getContractAt("UniOwnPool", "0x24dcDa2A3dB523a19f4386819141E3c83b590e73", deployer);
    // Parameters for the deployPool function
    const maxAmount = hre.ethers.utils.parseEther('10000'); // change as per your requirement
    const collection = '0x5B2ebDf5a730f6291c5560EdA9e6b4c8A25803a9'; // change as per your requirement
    const tokenId = 25; // change as per your requirement
    const fundraisingTime = 5000; // 24 hours from now
    const minParticipation = hre.ethers.utils.parseEther('100'); // change as per your requirement

    const tx = await UniOwnPoolFactory.deployPool(maxAmount, collection, tokenId, fundraisingTime, minParticipation, 3);

    // const tx2 = await UniOwnPoolFactory.deployPool(maxAmount, collection, tokenId, fundraisingTime, minParticipation, 4);

    // const tx3 = await UniOwnPoolFactory.deployPool(maxAmount, collection, tokenId, fundraisingTime, minParticipation, 5);

    // const tx4 = await UniOwnPoolFactory.deployPool(maxAmount, collection, tokenId, fundraisingTime, minParticipation, 6);
  
    // const pool1 = await UniOwnPool1.pool()
    // console.log(pool1, 'pool1')

    // const pool2 = await UniOwnPool2.pool()
    // console.log(pool2, 'pool2')

    // const pool3 = await UniOwnPool3.pool()
    // console.log(pool3, 'pool3')

    // const pool4 = await UniOwnPool4.pool()
    // console.log(pool4, 'pool4')

    // const pool5 = await UniOwnPool5.pool()
    // console.log(pool5, 'pool5')


    
    // await UniOwnPool5.connect(alice).deposit(ethers.utils.parseEther('2'), {value: ethers.utils.parseEther('2')})
    // await UniOwnPool5.connect(bob).deposit(ethers.utils.parseEther('1'), {value: ethers.utils.parseEther('1')})

    const pool1 = await UniOwnPool6.pool()
    console.log(pool1, 'pool1')



    // const receipt = await tx.wait();
    // console.log('Transaction was mined in block', receipt.blockNumber);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
