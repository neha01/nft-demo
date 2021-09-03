const assert = require('assert');
const c = require('config');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const artCollectible = artifacts.require('artCollectible');

contract('validator artcollectible contract()', (accounts) => {
  it('contract owner should be first contract from contracts list', async () => {
    let artCollectibleContract = await artCollectible.deployed();
    let owner = await artCollectibleContract.owner();
    expect(owner).to.equal(accounts[0]);
  });

  it('owner of tokenId 1 should be first contract from contracts list which is also the address that deployed contract', async () => {
    let artCollectibleContract = await artCollectible.deployed();
    const tokenURI =
      'https://ipfs.io/ipfs/QmYJx1uffuxvgXeurHmF7sHoA9SGdy77Nm6yEqZ64VyndS';
    await artCollectibleContract.claimItem(tokenURI);
    const owner = await artCollectibleContract.ownerOf(1);
    expect(owner).to.equal(accounts[0]);
  });
});
