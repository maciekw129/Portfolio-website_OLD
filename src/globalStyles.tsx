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

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyles;