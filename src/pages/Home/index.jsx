import React from "react";
import { MainContainer } from "../../styles/global";
import {
  AboutContainer,
  FormSection,
  Hero,
  ImageContainer,
  ItalicParh,
  PhraseContainer,
  PhraseContainerBG,
  PlaylistContainer,
} from "./styles";
import aboutBg from "/assets/about1.jpg";
import phraseBg from "/assets/phrase-bg.jpg";
import saxIcon from "/assets/sax.jpg";
import { VideoPlayer } from "../components";

import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia AOS com duração de 1 segundo
  }, []);

  return (
    <>
      <Hero>
        <MainContainer>
          <h1 data-aos="fade-up">
            É doce casar no mar… <span>Permita-se!</span>
          </h1>
        </MainContainer>
      </Hero>
      <MainContainer>
        <AboutContainer>
          <div data-aos="fade-up">
            <img src={phraseBg} alt="" />
          </div>

          <p data-aos="fade-up">
            Abraçada pelos coqueiros e beijada pelo mar.{" "}
            <span>Nasce um refúgio anfitrião de histórias de amor</span>
          </p>
        </AboutContainer>
        <PlaylistContainer data-aos="zoom-in">
          <p>
            Aqui Milagres acontecem! <a href="#">Clique aqui</a> e escute com os
            pés descalços
          </p>
          <img src={saxIcon} alt="" />
        </PlaylistContainer>
      </MainContainer>
      <PhraseContainerBG>
        <PhraseContainer>
          <p data-aos="fade-right">
            Quero viver no teu abraço
            <br />
            Quero morar no teu sorriso
            <br />
            Eternizar nossos laços
            <br />
            Em Casa e no paraíso
          </p>
          <ItalicParh data-aos="fade-right">
            Onde possamos ser nós
            <br />
            De forma única e verdadeira
            <br />
            Fazer tudo do nosso jeito
            <br />
            Feito o marceneiro
            <br />
            Esculpe a madeira
          </ItalicParh>
          <p data-aos="fade-right">
            Esculpir esse sonho
            <br />
            Junto a quem gostamos mais
            <br />
            Com as bênçãos desse lugar
            <br />
            Onde Milagres são reais!
          </p>
        </PhraseContainer>
        <ImageContainer>
          <img
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            src={aboutBg}
            alt=""
          />
        </ImageContainer>
      </PhraseContainerBG>
      <MainContainer>
        <FormSection>
          <div>
            <h2>O AMOR & O MAR</h2>
          </div>

          {/* <FormContainer>
            <form action="">
              <input placeholder="Nome" type="text" />
              <input placeholder="Telefone" type="text" />
              <input placeholder="Email" type="text" />
              <textarea placeholder="Sua Mensagem"></textarea>
              <button>Enviar</button>
            </form>
          </FormContainer> */}

          <VideoPlayer />
        </FormSection>
      </MainContainer>
    </>
  );
}
