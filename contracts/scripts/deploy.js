const hre = require("hardhat");

async function main() {

  this.Pass = await hre.ethers.getContractFactory("UniOwnPassport");

  this.DAO = await hre.ethers.getContractFactory("UniOwnDAO");
  this.Pool = await hre.ethers.getContractFactory("UniOwnPool");

  this.Factory = await hre.ethers.getContractFactory("UniOwnDaoFactory");
  this.FactoryPool = await hre.ethers.getContractFactory("UniOwnPoolFactory");


  this.pass = await this.Pass.deploy();
  await this.pass.deployed();

  this.dao = await this.DAO.deploy();
  await this.dao.deployed();

  this.pool = await this.Pool.deploy();
  await this.pool.deployed();

  this.factoryPool = await this.FactoryPool.deploy(this.pool.address);
  await this.factoryPool.deployed();


  this.factory = await this.Factory.deploy(this.dao.address);
  await this.factory.deployed();

  
  console.log("UniOwnPoolFactory deployed to:", this.factoryPool.address);
  console.log("UniOwnDaoFactory deployed to:", this.factory.address);
  console.log("pass deployed to:", this.pass.address);
  // console.log("UniOwnPoolFactory deployed to:", this.factory.address);
  // console.log("UniOwnPoolFactory deployed to:", this.factory.address);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});