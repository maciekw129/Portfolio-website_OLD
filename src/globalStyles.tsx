import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Josefin sans', sans-serif;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyles;