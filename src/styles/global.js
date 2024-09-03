import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem Belleza, serif;
  }
`;

export const MainContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 7.5rem;

  @media (max-width: 1000px) {
    & {
      padding: 0 4rem;
    }
  }

  @media (max-width: 620px) {
    & {
      padding: 0 2rem;
    }
  }
`;
