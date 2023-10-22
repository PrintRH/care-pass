import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useDarkMode } from "usehooks-ts";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import "~~/styles/globals.css";

const CarePassApp = ({ Component, pageProps }: AppProps) => {
  const [, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex flex-col flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default CarePassApp;
