import { PinterestLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";
import { MainContainer } from "../../styles/global";
import {
  FooterContainer,
  IconAndNavContainer,
  MidiaIconContainer,
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
            <PinterestLogo size={32} />
            <TiktokLogo size={32} />
            <YoutubeLogo size={32} />
          </MidiaIconContainer>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">HOME</Link>
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
          </div>
        </IconAndNavContainer>

        <TjLogoContainer>
          <p>Todos os direitos reservados,</p>
          <img src={logoTj} alt="" />
        </TjLogoContainer>
      </FooterContainer>
    </MainContainer>
  );
}
