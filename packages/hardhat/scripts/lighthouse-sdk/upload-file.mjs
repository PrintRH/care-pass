import * as dotenv from 'dotenv';
dotenv.config();
import lighthouse from '@lighthouse-web3/sdk';

const uploadFile = async () => {
  const path = "/Users/genesisblock/Desktop/organizations_gwrmj_images_Filecoin-symbol 4.15.50 AM.png"; // Provide the path to the file
  const apiKey = process.env.API_KEY; 
  // Generate the API key from https://files.lighthouse.storage/ 
  //or using CLI (lighthouse-web3 api-key --new)

  // Both files and folders are supported by the upload function
  const response = await lighthouse.upload(path, apiKey);

  console.log(response);
  console.log("Visit at: https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);
}

uploadFile();