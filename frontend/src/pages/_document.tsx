import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/img/icons/icon-white-128x128.png"
          />

          <meta property="og:image" content="/img/opengraph.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/img/opengraph.png" />
          <meta name="robots" content="noindex" />
          <meta name="theme-color" content="#46509e" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
