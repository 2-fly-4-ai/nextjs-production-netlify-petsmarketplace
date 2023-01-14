import "../src/styles/index.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Script from "next/script";

// import Router from 'next/router';
// import NProgress from 'nprogress';
//noautogensitemap
// NProgress.configure({ showSpinner: false });
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  GTM_ID = "GTM-WQLRZPZ";

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Script id="gtm-script">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          className="display:none"
        ></iframe>
      </noscript>
    </ApolloProvider>
  );
}

export default MyApp;
