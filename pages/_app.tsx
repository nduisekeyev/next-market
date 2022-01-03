import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
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
