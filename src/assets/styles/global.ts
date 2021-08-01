import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
  transition: all ease .2s;
}

strong {
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
}

#root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`;
