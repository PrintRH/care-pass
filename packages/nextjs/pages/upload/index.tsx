import lighthouse from "@lighthouse-web3/sdk";
import type { NextPage } from "next";
import scaffoldConfig from "~~/scaffold.config";

const Upload: NextPage = () => {
  // const progressCallback = (progressData) => {
  //   let percentageDone =
  //     100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
  //   console.log(percentageDone);
  // };

  const uploadFile = async (file: any) => {
    // Pushes file or folder to lighthouse node
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const apiKey = scaffoldConfig.lighthouseApiKey || "";
    try {
      let output: any;
      console.log(apiKey);
      if (apiKey) {
        output = await lighthouse.upload(file, apiKey, false);
        console.log("File Status:", output);
        console.log("Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Upload">
      <input onChange={e => uploadFile(e.target.files)} type="file" />
    </div>
  );
};

export default Upload;
