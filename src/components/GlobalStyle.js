import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 15px;
  font-family: "JetBrains Mono",monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(20,121,226);
background: linear-gradient(90deg, rgba(20,121,226,1) 0%, rgba(191,202,255,1) 12%, rgba(90,150,245,1) 100%);

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p{
    margin: 0;
}

ul, ol{
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

`;