import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <style jsx global>{`
        body {
          font-family: "Nunito", sans-serif;
        }
      `}</style> */}
    </>
  );
}

export default MyApp;
