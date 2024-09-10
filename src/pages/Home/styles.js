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
