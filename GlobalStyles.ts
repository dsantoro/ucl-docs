import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-family: "Roboto";
}

blockquote {
  padding: .5rem;
  padding-left: 1rem;
  border-left: 4px solid rgba(0, 0, 0, .2);
  background-color: rgba(0, 0, 0, .05);
  margin-bottom: 1rem;

  p {
    margin-bottom: 0;
  }
}

p {
  margin-bottom: 1rem;
}

ul, ol {
  margin: 0 0 1rem 0;
  padding-left: 1rem;
}

pre {
  overflow: auto;
  width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem
}

h2, h3, h4, h5 ,h6 {
  color: rgba(0, 0, 0, .8);
  font-weight: 300;
}
`

export default GlobalStyle;