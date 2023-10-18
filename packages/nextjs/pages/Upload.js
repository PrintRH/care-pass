import React from "react";
import lighthouse from '@lighthouse-web3/sdk';
import dotenv from 'dotenv';

function Upload() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async(file) =>{
    // Pushes file or folder to lighthouse node
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const output = await lighthouse.upload(file, process.env.API_KEY, false, null, progressCallback);
    console.log('File Status:', output);
    // Hash generated is CID

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }

  return (
    <div className="Upload">
      <input onChange={e=>uploadFile(e.target.files)} type="file" />
    </div>
  );
}

export default Upload;