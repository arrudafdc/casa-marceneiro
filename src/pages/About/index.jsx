import React from "react";
import { MainContainer } from "../../styles/global";
import AboutBg from "/assets/bg-about.jpg";
import logoIcon from "/assets/logo-icon.svg";
import bgFesta from "/assets/casa-sobre.jpg";
import moodboard from "/assets/moodboard.jpg";
import banheiro from "/assets/banheiro.jpg";
import cozinha from "/assets/cozinha.jpg";
import bgMainAbout from "/assets/bg-main-about.jpg";
import bgSecondAbout from "/assets/bg-second-about.jpg";
import bgSecondAboutMini from "/assets/bg-second-about-mini.jpg";
import decoracao from "/assets/about-decoracao.jpg";
import cerimonia from "/assets/about-cerimonia.jpg";
import { VideoPlayer } from "../components/VideoPlayer";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  AboutAccommodations,
  AccommodationContentContainer,
  AccommodationContentSection,
  HouseFullAboutContent,
  HouseFullAboutContentTwo,
  HouseFullParhAboutContent,
  HouseFullParhAboutContentTwo,
  MainAboutContent,
  MainAboutContentParh,
  TwoImagemSection,
  VideoAboutSection,
} from "./styles";

export function About() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia AOS com duração de 1 segundo
  }, []);

  return (
    <>
      <MainAboutContent>
        <div>
          <img src={bgMainAbout} />
        </div>
        <MainAboutContentParh>
          <h1 data-aos="fade-left">
            Seu refúgio conta com <br /> 4.100 m² de área total
          </h1>
        </MainAboutContentParh>
      </MainAboutContent>
      <MainContainer>
        <AboutAccommodations data-aos="fade-up">
          <h2>
            Nossos Serviços <span>& Comodidades</span>
          </h2>
          <AccommodationContentSection>
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
          </AccommodationContentSection>
        </AboutAccommodations>
      </MainContainer>

      <HouseFullAboutContent>
        <HouseFullParhAboutContent>
          <div>
            <h2 data-aos="fade-right">Histórias Começam Aqui</h2>
            <p data-aos="fade-right">
              Nossa Casa está aberta para te receber em outros formatos! Seja um
              casamento intimista ou grande, seja uma festa de welcome ou after,
              e até mesmo aniversários.
            </p>
          </div>
        </HouseFullParhAboutContent>
        <div>
          <img src={moodboard} />
        </div>
      </HouseFullAboutContent>

      <HouseFullAboutContentTwo>
        <div>
          <img src={bgSecondAbout} />
        </div>
        <HouseFullParhAboutContentTwo>
          <div data-aos="fade-up">
            <img src={bgSecondAboutMini} />
          </div>
        </HouseFullParhAboutContentTwo>
      </HouseFullAboutContentTwo>
      <MainContainer>
        <TwoImagemSection>
          <div data-aos="fade-right">
            <img src={cerimonia} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={decoracao} alt="" />
          </div>
        </TwoImagemSection>

        <VideoAboutSection>
          <h2 data-aos="fade-up">O AMOR & O MAR</h2>
          <div
            data-aos="zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <VideoPlayer />
          </div>
        </VideoAboutSection>
      </MainContainer>
    </>
  );
}
