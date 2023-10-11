import { Web3AuthModalPack } from "@safe-global/auth-kit";
import { CHAIN_NAMESPACES } from "@web3auth/base";

export const instantiateWeb3AuthModalPack = async (): Promise<Web3AuthModalPack> => {
  const web3AuthModalPack = new Web3AuthModalPack({
    txServiceUrl: "https://safe-transaction-goerli.safe.global",
  });

  const clientId = "BPYHMlvjtlSCa8dxSL_1384rqQzXXYrJ7vyPIMGjIW61r71l2oHqmpdthm-9EyrVcpV4SN4ac4yGk2jqTUgkEZc";
  const rpcTarget = "https://goerli.infura.io/v3/3302cccb995b4025bd1dfa8a0f66116a";

  await web3AuthModalPack.init({
    options: {
      web3AuthNetwork: "testnet",
      clientId,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x5",
        rpcTarget,
      },
      uiConfig: {
        theme: "dark",
        loginMethodsOrder: ["facebook", "google"],
        defaultLanguage: "en",
      },
    },
  });

  return web3AuthModalPack;
};
