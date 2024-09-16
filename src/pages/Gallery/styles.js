import styled from "styled-components";

export const GalleryContainer = styled.section`
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 imagens por linha */
  gap: 10px; /* Espaçamento entre as imagens */
  margin-bottom: 10rem;

  img {
    width: 100%;
    aspect-ratio: 1 / 1; /* Mantém o aspecto quadrado */
    object-fit: cover; /* Garante que a imagem preencha o quadrado */
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 820px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
