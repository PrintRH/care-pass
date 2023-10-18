require("hardhat-deploy")
require("hardhat-deploy-ethers")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    const { deploy } = deployments;

    const hospitalToken = await deploy("HospitalToken", {
        from: wallet.address,
        args: [],
        log: true,
    });
    
    //Define function to delegate to deployer wallet
    const delegate = async (
        hospitalTokenAddress,
        delegatedAccount
    ) => {
        const hospitalToken = await ethers.getContractAt(
            "HospitalToken",
            hospitalTokenAddress
        );
        delegateTx = await hospitalToken.delegate(delegatedAccount);
        await delegateTx.wait();
        console.log(
            `Checkpoints ${await hospitalToken.numCheckpoints(delegatedAccount)}`
        );
    }

    //Call delegate function below
    await delegate(hospitalToken.address, wallet.address);
    console.log("Delegated to deployer wallet!")
}