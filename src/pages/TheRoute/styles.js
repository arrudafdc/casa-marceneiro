import styled from "styled-components";

export const RouteSection = styled.section``;

export const MainRouteContent = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  div {
    margin-bottom: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }

    div {
      margin-bottom: 5rem;
    }
    img {
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const CoraisRouteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  div {
    margin-bottom: 5rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    & {
      margin-bottom: 0rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const CoraisFullRouteContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10rem;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    & {
      display: block;
      padding: 0 4rem;
    }

    img {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 620px) {
    & {
      padding: 0 2rem;
    }
  }
`;

export const CoraisFullParhRouteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  div {
    width: 50%;
    padding-bottom: 6rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    div {
      width: 70%;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }
  }
  @media (max-width: 1000px) {
    div {
      width: 80%;
    }
  }
`;
