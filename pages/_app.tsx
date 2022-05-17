import "../styles/globals.scss";
import type { AppProps } from "next/app";

import NProgress from "nprogress";
import "../styles/nprogress.scss";

import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
