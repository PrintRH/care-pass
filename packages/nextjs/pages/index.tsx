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

const Home: NextPage = () => {
  const [web3AuthModalPack, setWeb3AuthModalPack] = useState<Web3AuthModalPack>();
  // const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<AuthKitSignInData | null>(
  //   null
  // );
  // const [userInfo, setUserInfo] = useState<Partial<UserInfo>>();
  // const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  useEffect(() => {
    (async () => {
      // TODO: this should be in the login portion.
      const web3AuthModalPack = await instantiateWeb3AuthModalPack();
      const authKitSignData = await web3AuthModalPack.signIn();
      console.log("SIGN IN DATA:", authKitSignData);
      console.log("web3AuthModal:", web3AuthModalPack);
      console.log("web3AuthModal Provider:", web3AuthModalPack.getProvider());
      web3AuthModalPack.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);
      web3AuthModalPack.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler);

      setWeb3AuthModalPack(web3AuthModalPack);

      return () => {
        web3AuthModalPack.unsubscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);
        web3AuthModalPack.unsubscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler);
      };
    })();
  }, [web3AuthModalPack]);

  // const login = async () => {
  //   if (!web3AuthModalPack) return;

  //   const signInInfo = await web3AuthModalPack.signIn();
  //   console.log("SIGN IN RESPONSE: ", signInInfo);

  //   const userInfo = await web3AuthModalPack.getUserInfo();
  //   console.log("USER INFO: ", userInfo);

  //   setSafeAuthSignInResponse(signInInfo);
  //   setUserInfo(userInfo || undefined);
  //   setProvider(web3AuthModalPack.getProvider() as SafeEventEmitterProvider);
  // };

  return (
    <>
      <>HELLOOOO</>
    </>
  );
};

export default Home;
