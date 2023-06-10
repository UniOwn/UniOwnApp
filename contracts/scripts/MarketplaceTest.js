const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniOwnMarketplace", function () {
  let UniOwnMarketplace, uniOwnMarketplace, MockERC721, mockERC721, owner, addr1, addr2;

  beforeEach(async () => {
    // Deploy MockERC721
    MockERC721 = await ethers.getContractFactory("MockERC721");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    mockERC721 = await MockERC721.deploy();

    // Deploy UniOwnMarketplace
    UniOwnMarketplace = await ethers.getContractFactory("UniOwnMarketplace");
    uniOwnMarketplace = await UniOwnMarketplace.deploy();
  });

  describe("Marketplace Transactions", function () {
    it("Should add an item to the market and emit an event", async function () {
      const tokenId = 1;
      const askingPrice = ethers.utils.parseEther("1");

      // Mint a token to addr1
      await mockERC721.connect(addr1).mint(addr1.address, tokenId);
      
      // Approve marketplace to transfer token
      await mockERC721.connect(addr1).approve(uniOwnMarketplace.address, tokenId);

      await expect(uniOwnMarketplace.connect(addr1).addItemToMarket(tokenId, mockERC721.address, askingPrice))
        .to.emit(uniOwnMarketplace, 'ItemAdded')
        .withArgs(1, tokenId, mockERC721.address, askingPrice);
    });

    it("Should let someone buy an item", async function () {
      const tokenId = 2;
      const askingPrice = ethers.utils.parseEther("1");

      // Mint a token to addr1
      await mockERC721.connect(addr1).mint(addr1.address, tokenId);

      // Approve marketplace to transfer token
      await mockERC721.connect(addr1).approve(uniOwnMarketplace.address, tokenId);

      // Add item to market
      await uniOwnMarketplace.connect(addr1).addItemToMarket(tokenId, mockERC721.address, askingPrice);

      // Buy item
      await expect(uniOwnMarketplace.connect(addr2).buyItem(1, { value: askingPrice }))
        .to.emit(uniOwnMarketplace, 'ItemSold')
        .withArgs(1, addr2.address, askingPrice);
    });

    it("Should fail to buy an item that is already sold", async function () {
      const tokenId = 3;
      const askingPrice = ethers.utils.parseEther("1");

      // Mint a token to addr1
      await mockERC721.connect(addr1).mint(addr1.address, tokenId);

      // Approve marketplace to transfer token
      await mockERC721.connect(addr1).approve(uniOwnMarketplace.address, tokenId);

      // Add item to market
      await uniOwnMarketplace.connect(addr1).addItemToMarket(tokenId, mockERC721.address, askingPrice);

      // Buy item
      await uniOwnMarketplace.connect(addr2).buyItem(1, { value: askingPrice });

      // Attempt to buy again should fail
      await expect(uniOwnMarketplace.connect(addr2).buyItem(1, { value: askingPrice })).to.be.revertedWith('Item already sold');
    });
  });
});
