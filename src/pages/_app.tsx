import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

import RootProvider from "../shared/contexts/RootProvider";
import Fonts from "../shared/fonts";
import CommmonLayout from "../layouts/common/CommonLayout";
import { useEffect } from "react";
import setupInterceptors from "../services/setupInterceptors";
import "react-rangeslider/lib/index.css";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <>
      <Head>
        <title>
          2022 Published List Of Companies In USA &amp; List Of Businesses
        </title>
      </Head>
      <DefaultSeo
        titleTemplate="%s - EmailDatas"
        title="Email Datas"
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#FF4800",
          },
          {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width",
          },
        ]}
      />
      <RootProvider>
        <CommmonLayout>
          <Component {...pageProps} />
        </CommmonLayout>
      </RootProvider>
      <Script
        type="text/javascript"
        async={true}
        src="https://www.clickcease.com/monitor/stat.js"
      />

      <noscript>
        <a href="https://www.clickcease.com" rel="nofollow">
          <img
            src="https://monitor.clickcease.com/stats/stats.aspx"
            alt="ClickCease"
          />
        </a>
      </noscript>
      <Script
        id="my-script-google-tag-manager"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="afterInteractive" id="my-script-data-layer">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `,
        }}
      />
    </>
  );
}

export default MyApp;

setupInterceptors();
