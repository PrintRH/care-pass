import { UserInfo } from "@web3auth/base";
import create from "zustand";

/**
 * Zustand Store
 *
 * You can add global state to the app using this useGlobalState, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

type TGlobalState = {
  nativeCurrencyPrice: number;
  loggedInUserWalletAddress: string;
  userInfo: Partial<UserInfo>;
  setNativeCurrencyPrice: (newNativeCurrencyPriceState: number) => void;
  setLoggedInUserWallet: (newLoggedInUserWalletAddress: string) => void;
  setUserInfo: (newUserInfo: Partial<UserInfo>) => void;
};

export const useGlobalState = create<TGlobalState>(set => ({
  nativeCurrencyPrice: 0,
  loggedInUserWalletAddress: "",
  userInfo: {},
  setNativeCurrencyPrice: (newValue: number): void => set(() => ({ nativeCurrencyPrice: newValue })),
  setLoggedInUserWallet: (newValue: string): void => set(() => ({ loggedInUserWalletAddress: newValue })),
  setUserInfo: (newValue: Partial<UserInfo>): void => set(() => ({ userInfo: newValue })),
}));
