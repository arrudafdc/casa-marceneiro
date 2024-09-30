import styled from "styled-components";

export const GalleryContainer = styled.section`
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: normal;
  }

  span {
    font-style: italic;
    font-weight: 300;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const GalleryGrid = styled.section`
  column-count: 5; /* Número de colunas */
  column-gap: 10px;
  margin-bottom: 10rem;
  max-width: 1860px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  div {
    margin-bottom: 10px; /* Espaçamento vertical entre as imagens */
  }

  img {
    width: 100%;
    display: block;
    break-inside: avoid;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    & {
      column-count: 4; /* Diminui o número de colunas em telas menores */
    }
  }

  @media (max-width: 1000px) {
    & {
      column-count: 3; /* Diminui o número de colunas em telas menores */
    }
  }

  @media (max-width: 820px) {
    & {
      column-count: 2; /* Apenas uma coluna em telas bem pequenas */
    }
  }
`;
