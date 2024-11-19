import React from "react";
import { MainContainer } from "../../styles/global";
import AboutBg from "/assets/bg-about.jpg";
import logoIcon from "/assets/logo-icon.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  AboutAccommodations,
  AccommodationContentContainer,
  MainAboutSection,
  Teste,
} from "./styles";

export function About() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia AOS com duração de 1 segundo
  }, []);

  return (
    <MainContainer>
      <MainAboutSection>
        <h1 data-aos="fade-up">
          Seu refúgio conta com <span>4.100 m² de área total</span>
        </h1>
        <div>
          <img src={AboutBg} />
        </div>
      </MainAboutSection>
      <AboutAccommodations>
        <h2>Comodidades para seu evento</h2>
        <Teste>
          <AccommodationContentContainer>
            <img src={logoIcon} />
            <p>
              Área coberta construída de 390m² com piso de cimento queimado e
              estrutura de eucalipto
            </p>
          </AccommodationContentContainer>

          <AccommodationContentContainer>
            <img src={logoIcon} />
            <p>
              Banheiros Climatizados Masculino e Feminino com capacidade para
              até 150 pessoas
            </p>
          </AccommodationContentContainer>
          <AccommodationContentContainer>
            <img src={logoIcon} />
            <p>
              Espaço para cozinha interna e externa, ideal para atender às
              necessidades do evento
            </p>
          </AccommodationContentContainer>
          <AccommodationContentContainer>
            <img src={logoIcon} />
            <p>
              Estrutura completa para staff com banheiros para equipes e
              estacionamento de serviço
            </p>
          </AccommodationContentContainer>
          <AccommodationContentContainer>
            <img src={logoIcon} />
            <p>
              Um de nossos anfitriões para atender e auxiliar no que for
              necessário durante todo o evento
            </p>
          </AccommodationContentContainer>
        </Teste>
      </AboutAccommodations>
    </MainContainer>
  );
}
