/* eslint-disable react/no-unescaped-entities */
import { MainContainer } from "../../styles/global";
import {
  AirportRouteContent,
  AirportRouteContentImage,
  AirportRouteContentText,
  ContactRouteSection,
  CoraisFullParhRouteContent,
  CoraisFullRouteContent,
  MainRouteContent,
  MapContainer,
  RouteSection,
  ServiceHorizontalImage,
  ServicesRouteContainer,
  ServicesRouteImageContainer,
} from "./styles";
import bgRoute1 from "/assets/route-bg-main1.jpg";
import bgRoute2 from "/assets/route-bg-main2.jpg";
import bgRoute3 from "/assets/route-bg-main3.jpg";
import bgBarco from "/assets/route-barco.jpg";
import bgCoral from "/assets/route-coral.jpg";
import experiencia1 from "/assets/route-xp1.jpg";
import experiencia2 from "/assets/route-xp2.jpg";
import gastronomia1 from "/assets/route-gastronomia1.jpg";
import gastronomia2 from "/assets/route-gastronomia2.jpg";
import hospedagem1 from "/assets/route-hospedagem1.jpg";
import hospedagem2 from "/assets/route-hospedagem2.jpg";
import hospedagem3 from "/assets/route-hospedagem3.jpg";
import bgAirport from "/assets/route-cordenadas.jpg";
import mapa from "/assets/route-mapa.png";
import React from "react";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export function TheRoute() {
  const location = useLocation();

  React.useEffect(() => {
    document.title = "Casa Marceneiro - Rota";
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
      AOS.refresh();
    }, 200); // Pequeno delay para garantir que os elementos estejam prontos
  }, [location]);

  return (
    <RouteSection>
      <MainContainer>
        <MainRouteContent>
          <h1 data-aos="fade-up">
            {" "}
            Somos abraçados pela segunda{" "}
            <span> maior barreira de corais do mundo!</span>
          </h1>
          <div
            data-aos="zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <img src={bgRoute1} />
            <img src={bgRoute2} />
            <img src={bgRoute3} />
          </div>
        </MainRouteContent>
      </MainContainer>

      <CoraisFullRouteContent>
        <div>
          <img src={bgBarco} />
        </div>

        <CoraisFullParhRouteContent>
          <div>
            <h2 data-aos="fade-left">
              Um refúgio natural entre <span> vilas e coqueirais</span>
            </h2>
            <p data-aos="fade-left">
              A Rota Ecológica dos Milagres é composta por três pequenos
              municípios ligados por 23 km de coqueirais.{" "}
              <span>
                {" "}
                Seu desenho apresenta apenas uma rua principal cercada de
                pequenas vilas e boas energias.
              </span>
            </p>
            <p></p>
            <img data-aos="fade-left" src={bgCoral} />
          </div>
        </CoraisFullParhRouteContent>
      </CoraisFullRouteContent>
      <MainContainer>
        <ServicesRouteContainer>
          <h2 data-aos="fade-right">
            Com experiências para <br /> guardar no coração
          </h2>
          <ServicesRouteImageContainer>
            <div data-aos="fade-right">
              <img src={experiencia1} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={experiencia2} alt="" />
            </div>
          </ServicesRouteImageContainer>

          <h2 data-aos="fade">
            Gastronomia rica para <br /> alimentar a alma
          </h2>
          <ServicesRouteImageContainer>
            <div data-aos="fade-right">
              <img src={gastronomia1} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={gastronomia2} alt="" />
            </div>
          </ServicesRouteImageContainer>

          <h2 data-aos="fade">
            E hospedagens charmosas e <br /> confortáveis para todos os gostos
          </h2>
          <ServiceHorizontalImage data-aos="fade-up">
            <img src={hospedagem3} />
          </ServiceHorizontalImage>
          <ServicesRouteImageContainer>
            <div data-aos="fade-right">
              <img src={hospedagem1} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={hospedagem2} alt="" />
            </div>
          </ServicesRouteImageContainer>
        </ServicesRouteContainer>
      </MainContainer>

      <AirportRouteContent>
        <AirportRouteContentImage>
          <img src={bgAirport} />
        </AirportRouteContentImage>
        <AirportRouteContentText data-aos="fade-left">
          <h3>
            COORDENADAS <br /> 9°17'44.6"S 35°23'40.5"W
          </h3>
          <p>Aeroportos mais próximos:</p>
          <p>99km | 1h30 | - Aeroporto de Maceió, AL</p>
          <p>196km | 3h30 | - Aeroporto de Recife, PE</p>
          <span>* Há helipontos em Milagres.</span>
          <MapContainer data-aos="fade-left">
            <img src={mapa} />
          </MapContainer>
        </AirportRouteContentText>
      </AirportRouteContent>

      <ContactRouteSection data-aos="fade-up">
        <p>
          Para saber mais entre em contato com o nosso <br /> Atendimento
          Anfitrião para ter acesso <br /> ao nosso Guia Milagres!
        </p>
        <button>
          <a
            href="https://api.whatsapp.com/send?phone=558293415995&text="
            target="_blank"
          >
            Entre em contato
          </a>
        </button>
      </ContactRouteSection>
    </RouteSection>
  );
}
