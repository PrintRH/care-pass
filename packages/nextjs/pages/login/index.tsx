import { useEffect, useState } from "react";
import { Web3AuthEventListener, Web3AuthModalPack } from "@safe-global/auth-kit";
import { ADAPTER_EVENTS } from "@web3auth/base";
import type { NextPage } from "next";
import { instantiateWeb3AuthModalPack } from "~~/services/safe-protocol";
import { useGlobalState } from "~~/services/store/store";

const connectedHandler: Web3AuthEventListener = data => console.log("CONNECTED", data);
const disconnectedHandler: Web3AuthEventListener = data => console.log("DISCONNECTED", data);

const Login: NextPage = () => {
  const [web3AuthModalPack, setWeb3AuthModalPack] = useState<Web3AuthModalPack>();
  // const [walletAddress, setWalletAddress] = useState<string>();
  const setWalletAddress = useGlobalState(state => state.setLoggedInUserWallet);
  const setUserInfo = useGlobalState(state => state.setUserInfo);
  const loggedInUserWalletAddress = useGlobalState(state => state.loggedInUserWalletAddress);

  useEffect(() => {
    (async () => {
      if (loggedInUserWalletAddress === "") {
        const web3AuthModalPack = await instantiateWeb3AuthModalPack();
        const authKitSignData = await web3AuthModalPack.signIn();
        setWalletAddress(authKitSignData.eoa);
        const userInfo = await web3AuthModalPack.getUserInfo();
        // web3AuthModalPack.getProvider()
        setUserInfo(userInfo);
        web3AuthModalPack.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);
        web3AuthModalPack.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler);
        setWeb3AuthModalPack(web3AuthModalPack);
      }
    })();
  }, [web3AuthModalPack, loggedInUserWalletAddress, setWalletAddress, setUserInfo]);

  return <>{loggedInUserWalletAddress}</>;
};

export default Login;
