import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background-color: #c3e6ff;
    font-family: "Montserrat", "NotoSansKR";
  }
`;

export default GlobalStyle;
