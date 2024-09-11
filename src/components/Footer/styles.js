import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-bottom: 2rem;
`;

export const IconAndNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  ul {
    display: flex;
    list-style: none;
    gap: 4rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      width: 50px;
    }
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }

    ul {
      gap: 1rem;
      flex-direction: column;
    }
  }
`;

export const MidiaIconContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const TjLogoContainer = styled.div`
  p {
    font-family: "Comfortaa", sans-serif;
    font-size: 0.9rem;
  }
  img {
    width: 140px;
  }
`;
