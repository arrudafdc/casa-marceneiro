import styled from "styled-components";
import bg from "/assets/bg-teste.jpg";

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  margin-bottom: 10rem;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: normal;
  }

  span {
    font-style: italic;
  }

  @media (max-width: 1000px) {
    & {
      margin-bottom: 5rem;
    }
    h1 {
      font-size: 2rem;
      text-align: center;
    }
    span {
      display: block;
    }
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10rem;
  gap: 4rem;

  img {
    width: 100%;
    max-width: 600px;
  }

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: normal;
  }

  p {
    font-size: 1.25rem;
  }

  span {
    font-style: italic;
    display: block;
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }

    p {
      order: 1;
      max-width: 100%;
      text-align: center;
      font-size: 2rem;
    }

    div {
      order: 2;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 520px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const PlaylistContainer = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  p {
    font-size: 1.25rem;
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.text};
  }

  img {
    height: 5rem;
  }

  img:first-child {
    transform: scaleX(-1);
  }

  @media (max-width: 620px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const PhraseContainerBG = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10rem;

  @media (max-width: 1000px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ItalicParh = styled.p`
  font-style: italic;
`;

export const ImageContainer = styled.div`
  background: #c9bdab;
  overflow: hidden; // Para ocultar a parte da imagem que ultrapassa o container
  position: relative; // Para posicionar o conteúdo corretamente

  img {
    width: 100%;
    height: auto;
    animation: zoom-in-out 10s ease-in-out infinite; // Inicia a animação

    @keyframes zoom-in-out {
      0% {
        transform: scale(1.1); // Começa levemente ampliada
      }
      50% {
        transform: scale(1); // Volta ao tamanho original
      }
      100% {
        transform: scale(1.1); // Termina ampliada
      }
    }
  }

  @media (max-width: 1000px) {
    & {
      order: 1;
    }
  }
`;

export const PhraseContainer = styled.div`
  background: #c9bdab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  p {
    color: #fff;
    font-size: 2rem;
  }

  @media (max-width: 1200px) {
    & {
      gap: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    & {
      order: 2;
      padding: 4rem 0;
    }
  }
`;

export const VideoSection = styled.section`
  margin-bottom: 10rem;

  h2 {
    font-size: 2rem;
    text-align: center;

    margin-bottom: 5rem;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
      max-width: 100%;
    }
  }
`;
