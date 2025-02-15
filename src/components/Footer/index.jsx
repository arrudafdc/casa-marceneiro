import {
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "phosphor-react";
import { MainContainer } from "../../styles/global";
import {
  FooterContainer,
  IconAndNavContainer,
  MidiaIconContainer,
  NavFooter,
  TjLogoContainer,
} from "./styles";
import logoTj from "/assets/logo-tj.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <MainContainer>
      <FooterContainer>
        <IconAndNavContainer>
          <MidiaIconContainer>
            <a
              href="https://api.whatsapp.com/send?phone=558293415995&text="
              target="_blank"
            >
              <WhatsappLogo size={32} />
            </a>
            <a href="https://www.instagram.com/casamarceneiro/" target="_blank">
              <InstagramLogo size={32} />
            </a>
            <a href="https://br.pinterest.com/casamarceneiro/" target="_blank">
              <PinterestLogo size={32} />
            </a>
            <a
              href="https://www.youtube.com/@CasaMarceneiro-cu9rw"
              target="_blank"
            >
              <YoutubeLogo size={32} />
            </a>
          </MidiaIconContainer>
          <NavFooter>
            <nav>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/rota">A ROTA</Link>
                </li>
                <li>
                  <Link to="/sobre">SOBRE</Link>
                </li>
                <li>
                  <Link to="/galeria">GALERIA</Link>
                </li>
                <li>
                  <Link to="/contato">CONTATO</Link>
                </li>
              </ul>
            </nav>
          </NavFooter>
        </IconAndNavContainer>

        <TjLogoContainer>
          <p>Todos os direitos reservados,</p>
          <img src={logoTj} alt="" />
        </TjLogoContainer>
      </FooterContainer>
    </MainContainer>
  );
}
