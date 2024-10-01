import { Menu, X } from "lucide-react";
import { MainContainer } from "../../styles/global";
import {
  HeaderBG,
  HeaderBGDefault,
  MenuMobile,
  Nav,
  NavDefault,
} from "./styles";
import logo from "/assets/logo.png";
import logoDefault from "/assets/logo-cinza.png";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return location.pathname === "/home" ? <HeaderHome /> : <HeaderDefault />;
}

export function HeaderHome() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // ou 'scroll', dependendo da sua necessidade
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  function handleClick() {
    setIsMobile(!isMobile);
  }

  return (
    <HeaderBG>
      <MainContainer>
        <Nav>
          <ul>
            <li>
              <a href="#">A ROTA</a>
            </li>
            <li>
              <a href="#">SOBRE</a>
            </li>
          </ul>
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/galeria">GALERIA</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
          </ul>
          <button onClick={handleClick}>
            <Menu size={32} />
          </button>
        </Nav>

        <MenuMobile className={isMobile ? "open" : ""}>
          <ul>
            <li>
              <a href="#" onClick={handleClick}>
                A ROTA
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                SOBRE
              </a>
            </li>
            <li>
              <Link to="/galeria" onClick={handleClick}>
                GALERIA
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={handleClick}>
                CONTATO
              </Link>
            </li>
          </ul>
          <button onClick={handleClick}>
            <X size={32} color="#737373" />
          </button>
        </MenuMobile>
      </MainContainer>
    </HeaderBG>
  );
}

export function HeaderDefault() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // ou 'scroll', dependendo da sua necessidade
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  function handleClick() {
    setIsMobile(!isMobile);
  }

  return (
    <HeaderBGDefault>
      <MainContainer>
        <NavDefault>
          <ul>
            <li>
              <a href="#">A ROTA</a>
            </li>
            <li>
              <a href="#">SOBRE</a>
            </li>
          </ul>
          <Link to="/home">
            <img src={logoDefault} alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/galeria">GALERIA</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
          </ul>
          <button onClick={handleClick}>
            <Menu size={32} color="#616161" />
          </button>
        </NavDefault>

        <MenuMobile className={isMobile ? "open" : ""}>
          <ul>
            <li>
              <a href="#" onClick={handleClick}>
                A ROTA
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                SOBRE
              </a>
            </li>
            <li>
              <Link href="/galeria" onClick={handleClick}>
                GALERIA
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={handleClick}>
                CONTATO
              </Link>
            </li>
          </ul>
          <button onClick={handleClick}>
            <X size={32} color="#737373" />
          </button>
        </MenuMobile>
      </MainContainer>
    </HeaderBGDefault>
  );
}
