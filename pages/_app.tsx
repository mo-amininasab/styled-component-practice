// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
