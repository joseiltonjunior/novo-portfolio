import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
  }

  p, h1, h2, h3, h4, h5 {
    margin: 0;
  }
`;
