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
  margin-bottom: 5rem;

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
    max-width: 500px;
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
      margin-bottom: 5rem;
    }

    h2 {
      text-align: center;
    }

    div {
      order: 2;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 520px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const MainAboutContentTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10rem;

  img {
    width: 100%;
    display: block;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    margin-bottom: 5rem;
  }
`;

export const MainAboutContentParhTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bea68a;
  color: #fff;

  h2 {
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;

    text-transform: uppercase;
    font-weight: normal;
  }

  p:not(:last-child) {
    margin-bottom: 2rem;
  }

  p {
    span {
      font-style: italic;
    }
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }

    @media (max-width: 820px) {
      & {
        padding: 4rem;
        order: 1;
      }

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }
`;

export const PlaylistContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  p {
    font-size: 1.25rem;
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.text};
  }

  img {
    height: 4rem;
  }

  img:first-child {
    transform: scaleX(-1);
  }

  @media (max-width: 620px) {
    & {
      gap: 1rem;
    }

    img {
      height: 3rem;
    }

    p {
      font-size: 1rem;
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
