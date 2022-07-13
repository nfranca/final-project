import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    font-family: 'Lato', sans-serif;
    
}
body{
    max-height: 100%;
}

p {
    line-height: 1.3;
}
`;
export default GlobalStyles;

//yarn add styled-components
