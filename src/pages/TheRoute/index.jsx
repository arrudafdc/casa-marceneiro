import { MainContainer } from "../../styles/global";
import {
  AirportRouteContent,
  AirportRouteContentImage,
  AirportRouteContentText,
  ContactRouteSection,
  CoraisFullParhRouteContent,
  CoraisFullRouteContent,
  CoraisRouteContent,
  MainRouteContent,
  RouteSection,
  ServiceHorizontalImage,
  ServicesRouteContainer,
  ServicesRouteImageContainer,
} from "./styles";
import bgRoute from "/assets/bg-route.jpg";
import bgCorais from "/assets/bg-corais.jpg";
import bgBarco from "/assets/barco-rota.jpg";
import bgCoral from "/assets/coral-rota.jpg";
import experiencia1 from "/assets/experiencia1.jpg";
import experiencia2 from "/assets/experiencia2.jpg";
import gastronomia1 from "/assets/gastronomia1.jpg";
import gastronomia2 from "/assets/gastronomia2.jpg";
import hospedagem1 from "/assets/hospedagem1.jpg";
import hospedagem2 from "/assets/hospedagem2.jpg";
import hospedagem3 from "/assets/hospedagem3.jpg";
import bgAirport from "/assets/airportBG.jpg";
import mapa from "/assets/mapa.png";

export function TheRoute() {
  return (
    <RouteSection>
      <MainContainer>
        <MainRouteContent>
          <h1>A Rota</h1>
          <div>
            <img src={bgRoute} />
          </div>
        </MainRouteContent>
        <CoraisRouteContent>
          <p>
            Somos abraçados pela segunda maior <br /> barreira de corais do
            mundo!
          </p>
          <div>
            <img src={bgCorais} />
          </div>
          <h2>
            Um refúgio natural entre <br /> vilas e coqueirais
          </h2>
        </CoraisRouteContent>
      </MainContainer>

      <CoraisFullRouteContent>
        <div>
          <img src={bgBarco} />
        </div>

        <CoraisFullParhRouteContent>
          <div>
            <p>
              A Rota Ecológica dos Milagres é composta por três pequenos
              municípios ligados por 23 km de coqueirais.{" "}
              <span>
                {" "}
                Seu desenho apresenta apenas uma rua principal cercada de
                pequenas vilas e boas energias.
              </span>
            </p>
            <p></p>
            <img src={bgCoral} />
          </div>
        </CoraisFullParhRouteContent>
      </CoraisFullRouteContent>
      <MainContainer>
        <ServicesRouteContainer>
          <h2>
            Com experiências para <br /> guardar no coração
          </h2>
          <ServicesRouteImageContainer>
            <div>
              <img src={experiencia1} alt="" />
            </div>
            <div>
              <img src={experiencia2} alt="" />
            </div>
          </ServicesRouteImageContainer>

          <h2>
            Gastronomia rica para <br /> alimentar a alma
          </h2>
          <ServicesRouteImageContainer>
            <div>
              <img src={gastronomia1} alt="" />
            </div>
            <div>
              <img src={gastronomia2} alt="" />
            </div>
          </ServicesRouteImageContainer>

          <h2>
            E hospedagens charmosas e <br /> confortáveis para todos os gostos
          </h2>
          <ServiceHorizontalImage>
            <img src={hospedagem3} />
          </ServiceHorizontalImage>
          <ServicesRouteImageContainer>
            <div>
              <img src={hospedagem1} alt="" />
            </div>
            <div>
              <img src={hospedagem2} alt="" />
            </div>
          </ServicesRouteImageContainer>
        </ServicesRouteContainer>
      </MainContainer>

      <AirportRouteContent>
        <AirportRouteContentImage>
          <img src={bgAirport} />
        </AirportRouteContentImage>
        <AirportRouteContentText>
          <h3>
            COORDENADAS <br /> 9°17'44.6"S 35°23'40.5"W
          </h3>
          <p>Aeroportos mais próximos: </p>
          <p>99km | 1h30 | - Aeroporto de Maceió, AL</p>
          <p>196km | 3h30 | - Aeroporto de Recife, PE</p>
          <span>* Há helipontos em Milagres.</span>
        </AirportRouteContentText>
      </AirportRouteContent>

      <ContactRouteSection>
        <div>
          <img src={mapa} />
        </div>
        <p>
          Para saber mais entre em contato com o nosso <br /> Atendimento
          Anfitrião para ter acesso <br /> ao nosso Guia Milagres!
        </p>
        <button>Entre em contato</button>
      </ContactRouteSection>
    </RouteSection>
  );
}
