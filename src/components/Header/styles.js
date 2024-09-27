import styled from "styled-components";

export const HeaderBG = styled.header`
  color: #fff;
  font-family: "Comfortaa", sans-serif;
  font-size: 0.85rem;
  position: absolute;
  width: 100%;
  padding-top: 2rem;
`;

export const HeaderBGDefault = styled.header`
  font-family: "Comfortaa", sans-serif;
  font-size: 0.85rem;
  width: 100%;
  padding-top: 2rem;
  margin-bottom: 5rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 9rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 5rem;
    min-width: 211px;

    a {
      color: #fff;
      text-decoration: none;
      position: relative;
    }

    a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 1px;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.5s ease;
    }

    a:hover::after {
      transform: scaleX(1);
    }
  }

  button {
    border: 0;
    background: transparent;
    color: #fff;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    ul {
      display: none;
    }
    button {
      display: block;
    }
    img {
      width: 7rem;
    }
  }
`;

export const NavDefault = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 9rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 5rem;
    min-width: 211px;

    a {
      color: #616161;
      text-decoration: none;
      position: relative;
    }

    a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 1px;
      background-color: #616161;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.5s ease;
    }

    a:hover::after {
      transform: scaleX(1);
    }
  }

  button {
    border: 0;
    background: transparent;
    color: #fff;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    ul {
      display: none;
    }
    button {
      display: block;
    }
    img {
      width: 7rem;
    }
  }
`;

export const MenuMobile = styled.nav`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.background};
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 4rem;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  overflow: hidden;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }

  ul {
    li {
      margin-bottom: 2rem;
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
      font-family: "Belleza", serif;
      font-size: 2rem;
      position: relative;
    }

    a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.text};
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.5s ease;
    }

    a:hover::after {
      transform: scaleX(1);
    }
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 1rem;
  }

  @media (max-width: 620px) {
    & {
      padding: 2rem;
    }
    ul {
      a {
        font-size: 1.5rem;
      }
    }
  }
`;
