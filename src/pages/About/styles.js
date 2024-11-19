import styled from "styled-components";

export const MainAboutSection = styled.section`
  margin-bottom: 10rem;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  span {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
  }

  div {
    margin-bottom: 7rem;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }

    & {
      margin-bottom: 5rem;
    }
    img {
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const AboutAccommodations = styled.section`
  margin-bottom: 7rem;

  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 4rem;
    font-weight: normal;
  }

  p {
    font-size: 1.25rem;
    text-align: center;
    max-width: 300px;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const AccommodationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Teste = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
`;
