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
  }
`;

export const HouseFullParhAboutContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c9bdab;
  gap: 2rem;

  p {
    font-size: 1.25rem;
    max-width: 310px;
    color: #fff;
    text-align: center;
  }

  @media (max-width: 1000px) {
    & {
      padding: 5rem 0;
    }
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
