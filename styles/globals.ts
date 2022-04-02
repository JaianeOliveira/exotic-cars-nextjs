import styled, { createGlobalStyle } from "styled-components";

import { ThemeType } from "./themes/default";

type props = {
  theme: ThemeType;
};

export default createGlobalStyle<props>`
  html{
    font-size: 62.5%;
  }
  @font-face {
    font-family: 'Segoe UI Bold Italic';
    src: url('./fonts/Segoe UI Bold Italic.ttf') format('ttf'),
    }
      

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;

}
body {
  background: #FFFFFF;
 
}
a {
  color: inherit;
  text-decoration: none;
}
`;
