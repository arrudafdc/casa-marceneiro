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
  margin-bottom: 10rem;
  flex-direction: column;

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
    p {
      font-size: 1rem;
    }
  }
`;
