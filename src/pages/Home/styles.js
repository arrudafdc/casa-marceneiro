import styled from "styled-components";
import bg from "/assets/bg.jpg";

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
    font-size: 2.5rem;
  }

  @media (max-width: 1000px) {
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
  gap: 4rem;

  img {
    width: 100%;
    max-width: 600px;
  }

  p {
    font-size: 2.5rem;
    max-width: 390px;
    text-align: end;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 2rem;
      max-width: 300px;
    }
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }

    p {
      order: 1;
      max-width: 100%;
      text-align: initial;
      font-size: 2rem;
    }

    div {
      order: 2;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 620px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const PlaylistContainer = styled.section`
  margin-bottom: 10rem;
  p {
    font-size: 2rem;
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 620px) {
    p {
      font-size: 1.5rem;
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

export const ImageContainer = styled.div`
  background: #c9bdab;
  img {
    width: 100%;
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
    p {
      text-align: center;
    }
  }
`;
