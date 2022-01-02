import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header, Footer } from '@/components/organisms';
import { GlobalStyle } from '@/components/utils';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
