import { Menu, X } from "lucide-react";
import { MainContainer } from "../../styles/global";
import { HeaderBG, MenuMobile, Nav } from "./styles";
import logo from "/assets/logo.png";
import React from "react";

export function Header() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Desativa o scroll quando o menu está aberto
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // ou 'scroll', dependendo da sua necessidade
    }

    // Limpeza do estilo ao desmontar o componente
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
          <img src={logo} alt="" />
          <ul>
            <li>
              <a href="#">GALERIA</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
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
              <a href="#" onClick={handleClick}>
                GALERIA
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                CONTATO
              </a>
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
