import Document, { Html, Head, Main } from "next/document";
import { NextScript as OriginalNextScript } from "next/document";
import { GTM_ID } from "../shared/constants";

class NextScript extends OriginalNextScript {
  getScripts() {
    return super.getScripts().map((script) => {
      return React.cloneElement(script, {
        key: script.props.src,
        defer: this.props.mode === "defer" ? true : undefined,
        async: this.props.mode === "async" ? true : undefined,
      });
    });
  }
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            as="style"
            onLoad="this.rel = 'stylesheet'"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
            media="screen"
          /> */}

          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript mode="defer" />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
