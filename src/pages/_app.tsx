import React from 'react';
import type { AppProps } from 'next/app';
import { Header, Footer } from '@/components/organisms';
import { GlobalStyle } from '@/components/utils';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;
