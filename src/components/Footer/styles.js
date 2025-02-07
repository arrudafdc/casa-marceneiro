import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-bottom: 2rem;
`;

export const IconAndNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 4rem;
    font-family: "Comfortaa", sans-serif;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
      position: relative;
      font-size: 0.85rem;
    }

    a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.text};
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.5s ease;
    }

    a:hover::after {
      transform: scaleX(1);
    }

    img {
      width: 50px;
    }
  }

  @media (max-width: 1100px) {
    & {
      flex-direction: column;
      gap: 2rem;
      align-items: initial;
    }

    ul {
      gap: 1.5rem;
      flex-direction: column;
    }
  }
`;

export const MidiaIconContainer = styled.div`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const NavFooter = styled.div``;

export const TjLogoContainer = styled.div`
  p {
    font-family: "Comfortaa", sans-serif;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  img {
    width: 140px;
  }
`;
