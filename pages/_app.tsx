import React from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  let Wrapper = React.Fragment;
  let wrapperProps = {};

  // @ts-ignore
  if (Component.Layout) {
    // @ts-ignore
    Wrapper = Component.Layout;
    wrapperProps = pageProps.layout || {};
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Wrapper {...wrapperProps}>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}