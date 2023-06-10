const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniOwnPoolFactory contract", function () {
  let UniOwnPoolFactory, uniOwnPoolFactory;
  let UniOwnPool;
  let owner, addr1, addr2;
  let addrs;

  beforeEach(async function () {
    UniOwnPool = await ethers.getContractFactory("UniOwnPool");
    UniOwnPoolFactory = await ethers.getContractFactory("UniOwnPoolFactory");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy the UniOwnPoolFactory contract
    uniOwnPoolFactory = await UniOwnPoolFactory.deploy();
  });

  describe("deployPool", function () {
    it("Should deploy a new pool and add its address to allPools", async function () {
      await uniOwnPoolFactory.deployPool(
        ethers.utils.parseEther("10"), // _maxAmount
        addr1.address, // _collection
        1, // _tokenId
        600, // _fundrasingTime
        ethers.utils.parseEther("1") // _minParticipation
      );

    //   let poolInstance = await uniOwnPoolFactory.allPools(0);
    let poolInstance = UniOwnPool.attach(uniOwnPoolFactory.allPools(0));
 
    //   console.log(poolInstance, 'poolInstance')

      expect(await poolInstance.maxAmount()).to.equal(ethers.utils.parseEther("10"));
      expect(await poolInstance.collection()).to.equal(addr1.address);
      expect(await poolInstance.tokenId()).to.equal(1);
      expect(await poolInstance.minParticipation()).to.equal(ethers.utils.parseEther("1"));
    });
  });
});
