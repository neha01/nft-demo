# NFT Demo

This project creates a smart contract and then deploys it to Rinkeby public testnet.
NFT's can then be minted by sending transaction to the deployed smart contract.

Find the NFT's on Opensea testnet:

https://testnets.opensea.io/assets/0x1e9930Bc5f39dE0515BeC52612bc4510F7B236C0/1

https://testnets.opensea.io/assets/0xD6c24c9A49271bFe5a04B00363EB521a02768bA1/1

<img width="1332" alt="Screenshot 2021-09-05 at 8 44 23 PM" src="https://user-images.githubusercontent.com/4893002/132132564-b0fb8524-3035-4e61-85db-17e5fda1fad6.png">

## Follow the Youtube tutorial here:  
[![MINT NFT TUTORIAL](https://img.youtube.com/vi/axdymRYSHTs/0.jpg)](https://www.youtube.com/watch?v=axdymRYSHTs)

### Dependencies:
* `NodeJS`   
https://nodejs.org/en/download/
* `Ganache UI`  
https://www.trufflesuite.com/ganache

(Ganache UI is not required in case you want to work with ganache-cli)

### Usage:
1. Clone the repo and run npm install.  
`git clone https://github.com/neha01/nft-demo.git && cd nft-demo && npm install`

2. Put image file that you want to convert into an NFT under assets folder.

3. Create a account in Pinata (https://www.pinata.cloud/) and create an API Key.    
   Click on top right profile picture -> API Keys -> New Key    
   Note down The API Key and API Key Secret and update in .env file.

4. Update the name of your image file in `assets` folder.    
   Update `filePath` with your image filepath.    
   Run  `node scripts/runScript` command.    
   This will call Pinata API's and will upload file to IPFS and a new file will be created in `data` folder `ipfsHash.json` and the 
   Pinata response containing the `ipfsHash` will be populated in that file.

5. Now create a metadata.json file with the details about your NFT. For Reference checkout data/metadata.json file .
   Update `filePath` with your metadata filepath.
   Again Run  `node scripts/runScript` command.
   This will call Pinata API's and will upload metadata file to IPFS and the Pinata response containing the `ipfsHash` will be again populated in `ipfsHash.json`  file.

6. Install latest solidity version by running `npm install solc` and Dont forget to update this solidity version in truffle-config.

7. Update Rinkeby test network details in `truffle-config.js` .  
   Update your account mnemonic in `.env` file.  
   Now run `truffle console --network rinkeby` to connect to Rinkeby Public test network.  
   Run `migrate` command to deploy the contract on Rinkeby testnet.  
   Run `let art = await ArtCollectible.deployed()`.    
   Run `await art.claimItem('https://ipfs.io/ipfs/QmREBUVuoeX39eB9KiQjp25RFr2dhYF6zawpYXq1UPJXEz')`   
   Pass the correct metadata file IPFS address to claimItem.  
   Run `art.address` to get contract address.  

8. Checkout your NFT on 
  `https://testnets.opensea.io/assets/contract_address/tokenId`.   
   You can also verify your metadata using on https://rinkeby-api.opensea.io/asset/contract_address/tokenId/validate     
   eg: https://rinkeby-api.opensea.io/asset/0x1e9930Bc5f39dE0515BeC52612bc4510F7B236C0/1/validate
  

   Party!!🥳🥳




