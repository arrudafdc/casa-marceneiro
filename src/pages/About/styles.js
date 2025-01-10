import styled from "styled-components";

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
    span {
      display: block;
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

export const AccommodationContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
`;

export const HouseFullAboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7rem;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    margin-bottom: 5rem;

    & > div:first-child {
      order: 2;
    }

    & > div:last-child {
      order: 1;
    }
  }
`;

export const HouseFullParhAboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.25rem;
    max-width: 370px;
  }

  @media (max-width: 1000px) {
    p {
      padding: 0 1rem;
    }
  }
`;

export const HouseFullAboutContentTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7rem;

  img {
    width: 100%;
    display: block;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin-bottom: 5rem;
  }
`;

export const HouseFullParhAboutContentTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c19a6b;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
    color: #fff;
  }
`;

export const TwoImagemSection = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 10rem;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      margin-bottom: 5rem;
      gap: 2rem;
    }
  }
`;

export const VideoAboutSection = styled.section`
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
