import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Header from './components/Header';
import Footer from './components/Footer';
import { SliderProvider } from './context/slider';

import OSGrotesk_eot from './fonts/OSGroteskWeb-Regular.eot';
import OSGrotesk_ttf from './fonts/OSGroteskWeb-Regular.ttf';
import OSGrotesk_woff from './fonts/OSGroteskWeb-Regular.woff';
import OSGrotesk_woff2 from './fonts/OSGroteskWeb-Regular.woff2';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'OS Grotesk';
    src: local('OS Grotesk'),
          url(${OSGrotesk_eot}?#iefix) format('embedded-opentype'),
          url(${OSGrotesk_woff2}) format('woff2'),
          url(${OSGrotesk_woff}) format('woff'),
          url(${OSGrotesk_ttf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 60px 0 0;
    font-size: 14px;
    font-family: 'OS Grotesk', sans-serif;
    background-color: #fff;
    word-break: keep-all;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

function App() {
  return (
    <SliderProvider>
      <GlobalStyles />
      <Header />
      <Footer />
    </SliderProvider>
  );
}

export default App;
