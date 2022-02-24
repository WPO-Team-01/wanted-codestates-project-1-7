import { createGlobalStyle, css } from "styled-components";

// reset: html 태그들의 기본 스타일을 제거해줌. yarn add styled-reset
const globalStyle = css`
  // 이 웹페이지에 등장하는 모든 엘리먼트에 대해 : *
  // 엘리먼트의 크기를 지정할 때 padding이나 border를 가지고 있으면 예상한 크기와 다르게 할 수 있다 box-sizing
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
