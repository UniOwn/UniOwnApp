const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniOwnPool contract", function () {
  let UniOwnPool, uniOwnPool;
  let UniOwnPoolFactory, uniOwnPoolFactory;
  let owner, addr1, addr2;
  let addrs;

  beforeEach(async function () {
    UniOwnPool = await ethers.getContractFactory("UniOwnPool");
    UniOwnPoolFactory = await ethers.getContractFactory("UniOwnPoolFactory");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    uniOwnPoolFactory = await UniOwnPoolFactory.deploy();

    // Deploy the contract
    uniOwnPool = await UniOwnPool.deploy(
      ethers.utils.parseEther("10"), // _maxAmount
      addr1.address, // _collection
      1, // _tokenId
      600, // _fundrasingTime
      ethers.utils.parseEther("1") // _minParticipation
    );
  });


  describe("Constructor & Properties", function () {

    it("Should correctly set initial properties", async function () {
      expect(await uniOwnPool.maxAmount()).to.equal(ethers.utils.parseEther("10"));
      expect(await uniOwnPool.collection()).to.equal(addr1.address);
      expect(await uniOwnPool.tokenId()).to.equal(1);
      expect(await uniOwnPool.minParticipation()).to.equal(ethers.utils.parseEther("1"));
      // Add more checks for other properties...
    });
  });

  describe("deposit", function () {

    it("Should correctly deposit funds and set participant properties", async function () {
        await uniOwnPool.deposit(ethers.utils.parseEther("1"), {
          value: ethers.utils.parseEther("1")
        });
  
        expect(await uniOwnPool.userToAmount(owner.address)).to.equal(ethers.utils.parseEther("1"));
        expect(await uniOwnPool.isParticipated(owner.address)).to.equal(true);
        expect(await uniOwnPool.totalAmount()).to.equal(ethers.utils.parseEther("1"));
      });
  
      it("Should correctly finalize the pool when max amount reached", async function () {
        await uniOwnPool.deposit(ethers.utils.parseEther("10"), {
          value: ethers.utils.parseEther("10")
        });
  
        expect(await uniOwnPool.poolSuccessful()).to.equal(true);
        expect(await uniOwnPool.poolFinished()).to.equal(true);
      });

    it("Should reject deposit if pool closed", async function () {
      await uniOwnPool.deposit(ethers.utils.parseEther("1"), {
        value: ethers.utils.parseEther("1")
      });

      // Let's move the time ahead by 601 seconds.
      await ethers.provider.send("evm_increaseTime", [601]);
      await ethers.provider.send("evm_mine");

      await expect(
        uniOwnPool.deposit(ethers.utils.parseEther("1"), {
          value: ethers.utils.parseEther("1")
        })
      ).to.be.revertedWith("Pool closed");
    });

    // Add more tests for deposit function...
  });

  describe("withdrawUserFundsIfSaleCancelled", function () {
    it("Should withdraw funds if pool was cancelled", async function () {
      // Deposit some ether
      await uniOwnPool.deposit(ethers.utils.parseEther("1"), {
        value: ethers.utils.parseEther("1")
      });

      // Advance time to end the pool
      await ethers.provider.send("evm_increaseTime", [601]);
      await ethers.provider.send("evm_mine");

      await uniOwnPool.deposit(ethers.utils.parseEther("1"), {
        value: ethers.utils.parseEther("1")
      });


      // Withdraw funds
      await uniOwnPool.withdrawUserFundsIfSaleCancelled();

      expect(await ethers.provider.getBalance(uniOwnPool.address)).to.equal(0);
    });

    // Add more tests for withdrawUserFundsIfSaleCancelled function...
  });
});

