const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20Factory", function () {
  let UniOwnDAO, ERC20Factory, tokenFactory, tokenInstance, owner, addr1, addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    UniOwnDAO = await ethers.getContractFactory("UniOwnDAO");


    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy the contracts
    uniOwnDAO = await UniOwnDAO.deploy();
    await uniOwnDAO.deployed();
  });

  it("Should init dao", async function () {
     console.log('huy')
     const name = 'Huevoe dao'
     const symbol = 'HUY'
     const paused = false;
     const voters = [addr1.address, addr2.address, owner.address]
     const shares = [ethers.utils.parseEther('4000'),ethers.utils.parseEther('7000'), ethers.utils.parseEther('8000')]
     const proposalType = 0; // you need to provide a valid proposal type
    const description = "Test proposal";
    const accounts = [addr1.address, addr2.address]; // provide valid addresses
    const amounts = [1, 2];
    const payloads = ["0x0123", "0x0456"]; // provide valid payloads


     await uniOwnDAO.init(name, symbol, paused, voters, shares)

     const ownerBalance = await uniOwnDAO.balanceOf(owner.address);
     console.log(ownerBalance, 'ownerBalance')
     await uniOwnDAO.propose(proposalType, description, accounts, amounts, payloads)
     await uniOwnDAO.connect(owner).vote(1, true)
 
 
     const p = await uniOwnDAO.proposals(1);
     console.log(p, 'p')
  });

  it("Should propose", async function () {

    const proposalType = 0; // you need to provide a valid proposal type
    const description = "Test proposal";
    const accounts = [addr1.address, addr2.address]; // provide valid addresses
    const amounts = [1, 2];
    const payloads = ["0x0123", "0x0456"]; // provide valid payloads

    const ownerBalance = await uniOwnDAO.balanceOf(addr1.address);
    console.log(ownerBalance, 'ownerBalance2')
    await uniOwnDAO.connect(owner).transfer(addr2.address, ethers.utils.parseEther('400'))

    await uniOwnDAO.propose(proposalType, description, accounts, amounts, payloads)
    await uniOwnDAO.connect(owner).vote(1, true)


    const p = await uniOwnDAO.proposals(1);
    console.log(p, 'p')
 });
});

