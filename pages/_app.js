import "../src/styles/index.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import Router from "next/router";
// import NProgress from "nprogress";

// NProgress.configure({ showSpinner: false });
// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const GTM_ID = "GTM-WQLRZPZ";
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-WQLRZPZ" });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
