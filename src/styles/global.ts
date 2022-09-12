import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #F2F2F2;
        font-family: 'Poppins', sans-serif;
    }

    html{
        scroll-behavior: smooth;
    }

`

export default Global