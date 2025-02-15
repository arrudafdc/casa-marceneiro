import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../../styles/global";
import {
  AboutContainer,
  VideoSection,
  Hero,
  PlaylistContainer,
  MainAboutContentTwo,
  MainAboutContentParhTwo,
} from "./styles";
import casalFrase from "/assets/home-casal-poesia.jpg";
import casalMain from "/assets/home-casal-main.jpg";
import saxIcon from "/assets/home-sax.jpg";
import { VideoPlayer } from "../components/VideoPlayer";
import videoFile from "/assets/home-video.mp4";
import thumb from "/assets/home-thumb-video.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

export function Home() {
  const location = useLocation();

  React.useEffect(() => {
    document.title = "Casa Marceneiro - Home";
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
      AOS.refresh();
    }, 200); // Pequeno delay para garantir que os elementos estejam prontos
  }, [location]);

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
        <PlaylistContainer data-aos="zoom-in">
          <img src={saxIcon} alt="" />
          <p>
            Antes de tudo...{" "}
            <a
              href="https://open.spotify.com/playlist/5LQIkOoHEQI1L2Uhl7scHn"
              target="_blank"
            >
              clique aqui
            </a>{" "}
            e fique com os pés descalços
          </p>
          <img src={saxIcon} alt="" />
        </PlaylistContainer>
        <AboutContainer>
          <div data-aos="fade-up">
            <img src={casalMain} alt="" />
          </div>

          <div>
            <h2 data-aos="fade-left">Casa marceneiro</h2>
            <p data-aos="fade-left">
              Abraçada pelos coqueiros e beijada pelo mar.{" "}
              <span>Nasce um refúgio anfitrião de histórias de amor</span>
            </p>
          </div>
        </AboutContainer>
      </MainContainer>

      <MainAboutContentTwo>
        <MainAboutContentParhTwo>
          <div>
            <h2 data-aos="fade-right">Nossos votos</h2>
            <p data-aos="fade-right">
              Quero viver no teu abraço <br /> Quero morar no teu sorriso
              <br /> Eternizar nossos laços <br /> Em Casa e no paraíso
            </p>
            <p data-aos="fade-right">
              <span>
                Onde possamos ser nós <br /> De forma única e verdadeira <br />{" "}
                Fazer tudo do nosso jeito <br /> Feito o marceneiro <br />{" "}
                Esculpe a madeira
              </span>
            </p>
            <p data-aos="fade-right">
              Esculpir esse sonho <br /> Junto a quem gostamos mais <br /> Com
              as bênçãos desse lugar <br /> Onde Milagres são reais!
            </p>
          </div>
        </MainAboutContentParhTwo>
        <div>
          <img src={casalFrase} />
        </div>
      </MainAboutContentTwo>

      <MainContainer>
        <VideoSection>
          <h2 data-aos="fade-up">O AMOR & O MAR</h2>
          <div
            data-aos="zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <VideoPlayer thumb={thumb} videoFile={videoFile} />
          </div>
        </VideoSection>
      </MainContainer>
    </>
  );
}
