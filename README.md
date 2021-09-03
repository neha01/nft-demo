# NFT Demo

This project creates a smart contract and then deploys it to Rinkeby public testnet.
NFT's can then be minted by sending transaction to the deployed smart contract.

Dependencies:
* `NodeJS` 
https://nodejs.org/en/download/
* `Ganache UI`  
https://www.trufflesuite.com/ganache

Usage:
1. Clone the repo and run npm install.
`git clone https://github.com/neha01/nft-demo.git && cd nft-demo && npm install`

2. Put image file that you want to convert into an NFT under assets folder.

3. Create a account in Pinata (https://www.pinata.cloud/) and create an API Key.

Click on top right profile picture -> API Keys -> New Key

Note down The API Key and API Key Secret and update in .env file.

4. Update the name of your image file in `assets` folder.

Update `filePath` with your image filepath.

Run  `node scripts/runScript` command. 

This will call Pinata APi's and will upload file to IPFS and a new file will be created in `data` folder `ipfsHash.json` and the 

Pinata response containing the `ipfsHash` will be populated in that file.

5. Now create a metadata.json file with the details about your NFT. For Reference checkout data/metadata.json file .

Update `filePath` with your metadata filepath.
Again Run  `node scripts/runScript` command with updated filename in runscript directory.
This will call Pinata APi's and will upload metadata file to IPFS and the Pinata response containing the `ipfsHash` will be again populated in `ipfsHash.json` file.

6. Update Rinkeby test network details in `truffle-config.js` .

Update your account mnemonic in `.env` file.

Now run `truffle console --network rinkeby` to connect to Rinkeby Public test network.

Run `migrate` command to deploy the contract on Rinkeby testnet.

Run `let art = await ArtCollectible.deployed()`

Run `await art.claimItem('https://ipfs.io/ipfs/QmQYE35JdthxvBZahG77w5XSuPKL2jNkJdtxQo4Pc57U1n')` 

Pass the correct metadata file IPFShash to claimItem.

Run `art.address` to get contract address.

7. Checkout your NFT on 
`https://testnets.opensea.io/assets/contract_address/tokenId`

🥳🥳




