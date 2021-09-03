const config = require('config');
const path = require('path');
const chai = require('chai');
const expect = chai.expect;

const validator = require('../scripts/ipfsHelper.js');

describe("validator storeDataToFile()", () => {

    it("should return true for artCollectible contracts file", async () => {
        const filePath = path.join(__dirname, '../contracts/ArtCollectible.sol');
        const result = await validator.fileExists(filePath);
        expect(result).to.be.true;
    })

    it("should return false since dummy.sol doesnt exists in contracts folder", async () => {
        const filePath = path.join(__dirname, '../contracts/dummy.sol');
        const result = await validator.fileExists(filePath);
        expect(result).to.be.false;
    })

    it("should create a file since it doesnt exists yet", async () => {
        const filePath = path.join(__dirname, config.get("ipfsFile.location"));
        await validator.storeDataToFile({ ipfsHash: "some dummy data" });
        const result = await validator.fileExists(filePath);
        expect(result).to.be.true;
    })

});
