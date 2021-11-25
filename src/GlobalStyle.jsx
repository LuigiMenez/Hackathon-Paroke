import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    background: #000;
    
  }
  h1{
    font-size: 2rem;
  }
`;

export default GlobalStyle;
