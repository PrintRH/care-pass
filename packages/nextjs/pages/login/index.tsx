import { useEffect, useState } from "react";
import {
  Web3AuthEventListener, // SafeAuthKit,
  // SafeAuthSignInData,
  // SafeGetUserInfoResponse,
  Web3AuthModalPack,
} from "@safe-global/auth-kit";
import {
  ADAPTER_EVENTS, // SafeEventEmitterProvider,
  // UserInfo,
  // WALLET_ADAPTERS
} from "@web3auth/base";
import type { NextPage } from "next";
import { instantiateWeb3AuthModalPack } from "~~/services/safe-protocol";

const connectedHandler: Web3AuthEventListener = data => console.log("CONNECTED", data);
const disconnectedHandler: Web3AuthEventListener = data => console.log("DISCONNECTED", data);

const Login: NextPage = () => {
  const [web3AuthModalPack, setWeb3AuthModalPack] = useState<Web3AuthModalPack>();

  useEffect(() => {
    (async () => {
      const web3AuthModalPack = await instantiateWeb3AuthModalPack();
      const authKitSignData = await web3AuthModalPack.signIn();
      console.log("SIGN IN DATA:", authKitSignData);
      console.log("web3AuthModal:", web3AuthModalPack);
      console.log("web3AuthModal Provider:", web3AuthModalPack.getProvider());
      console.log("USER INFO", web3AuthModalPack.getUserInfo());
      web3AuthModalPack.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);
      web3AuthModalPack.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler);

      setWeb3AuthModalPack(web3AuthModalPack);

      return () => {
        web3AuthModalPack.unsubscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);
        web3AuthModalPack.unsubscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler);
      };
    })();
  }, [web3AuthModalPack]);

  return <></>;
};

export default Login;
