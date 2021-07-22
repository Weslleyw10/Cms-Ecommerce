import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Ubuntu', sans-serif;
        font-weight: normal;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }

`;