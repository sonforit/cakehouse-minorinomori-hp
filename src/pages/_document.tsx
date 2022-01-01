import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content="ケーキハウスみのりの森のホームページ" />
          <meta property="og:url" content="https://cakehouse-minorinomori.com/" />
        </Head>
        <body>
          <div id="app">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
