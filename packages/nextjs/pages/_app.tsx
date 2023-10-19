import type { AppProps } from "next/app";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  // This variable is required for initial client side rendering of correct theme for RainbowKit

  return (
    <div className="flex flex-col min-h-screen">
      <main className="relative flex flex-col flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default ScaffoldEthApp;
