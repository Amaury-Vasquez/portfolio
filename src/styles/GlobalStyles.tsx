import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    --blue: #5ed3f3;
    --gold: #fecd70;
    --red: #df362d;
    --orange: #ff4500;
    --soft-orange: #ff8300;
    --green: #b7ac44;
    --black: #080808;
    --shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, h4, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  a {
    text-decoration: none;
    &:focus {
      outline: none;
    }
  }
  
  body {
    height: 100vh;
    margin: 0 auto;
    max-width: 100vw;
    overscroll-behavior: none;
    background-color: var(--black);
    overflow-x: hidden;
    width: 100%; 
    font-family: Rubik, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
`;
