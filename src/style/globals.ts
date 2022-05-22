import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #F4F4F4;
    input, button, textarea{
      outline: none;
      background: transparent;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
    button{
      cursor: pointer;
    }

  }
  :root{
    --background-primary: rgba(18, 31, 38, 0.9);
    --background-secondary: #182328;
    --color-primary: #F4F4F4;
  }
  body{
    background: var(--background-primary);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;