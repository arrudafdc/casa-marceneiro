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
