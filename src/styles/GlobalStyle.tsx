import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 100%;
    color: ${(props) => props.theme.colors.typography};
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyleComposed = () => (
    <GlobalStyle />
);

export default GlobalStyleComposed;
