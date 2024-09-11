import { PinterestLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";
import { MainContainer } from "../../styles/global";
import {
  FooterContainer,
  IconAndNavContainer,
  MidiaIconContainer,
  TjLogoContainer,
} from "./styles";
import logoTj from "/assets/logo-tj.png";

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
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">A ROTA</a>
                </li>
                <li>
                  <a href="#">SOBRE</a>
                </li>
                <li>
                  <a href="#">GALERIA</a>
                </li>
                <li>
                  <a href="#">CONTATO</a>
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
