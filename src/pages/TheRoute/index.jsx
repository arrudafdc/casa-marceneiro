import { MainContainer } from "../../styles/global";
import {
  CoraisFullParhRouteContent,
  CoraisFullRouteContent,
  CoraisRouteContent,
  MainRouteContent,
  RouteSection,
} from "./styles";
import bgRoute from "/assets/bg-route.jpg";
import bgCorais from "/assets/bg-corais.jpg";
import bgBarco from "/assets/barco-rota.jpg";
import bgCoral from "/assets/coral-rota.jpg";

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
          <p>
            A Rota Ecológica dos Milagres é composta <br /> por três pequenos
            municípios ligados <br /> por 23 km de coqueirais.
          </p>
        </CoraisRouteContent>
      </MainContainer>
      <CoraisFullRouteContent>
        <div>
          <img src={bgBarco} />
        </div>
        <CoraisFullParhRouteContent>
          <div>
            <p>
              Seu desenho apresenta apenas uma rua principal cercada de pequenas
              vilas e boas energias.
            </p>
            <img src={bgCoral} />
          </div>
        </CoraisFullParhRouteContent>
      </CoraisFullRouteContent>
    </RouteSection>
  );
}
