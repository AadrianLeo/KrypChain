# KrypChain

This is an responsive react project of web 3.0 based on blockchain which contains metamask trading ethereum. The project is writen in javascript and solidity language it has security given by metamask password protected security. You can see the transactions send etherium in rinkiby test network. And giphy is use for attractive interface in transcations section.

![krypchain](https://user-images.githubusercontent.com/81036521/169703816-1584dbc1-afe1-4d2a-9d93-2ae62a9b9c58.JPG)


## `For API KEYS`

### After making metamask account get some rinkiby ethereum 

you can get it from any of this and you are good to go: 

https://rinkebyfaucet.com/

https://faucet.rinkeby.io/




### `For GIPHY api key`
https://developers.giphy.com/

`create a .env file and paste the API key as shown in .envexample file` 

### `For Alchemy application api key`
https://www.alchemy.com/

`create an account then create an app with rinkiby network and the copy the app html API KEY from daskbord of the created application and paste it in smart_contract > hardhat.config.js in the url: 'Alchemy_APPLICATION_API_KEY'`

### `For Metamask Private key`
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en

 `download the metamask google extention setup mask and in the account menu click on account details and then export private key and enter password copy the key and paste it in smart_contract > hardhat.config.js in the accounts : 'metamask_account_private_key'`
 
 ### `For Transaction address`
 
 `After enterin all the keys in the terminal go into the smart_contract file and enter rhe command : 'npx hardhat run scripts/deploy.js --network ropsten' and then copy the account address and paste it in client > src > utils > constants.js in contractAddress: 'Transaction_Address_key' `


