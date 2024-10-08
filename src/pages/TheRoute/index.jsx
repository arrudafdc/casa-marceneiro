import { MainContainer } from "../../styles/global";
import { CoraisRouteContent, MainRouteContent, RouteSection } from "./styles";
import bgRoute from "/assets/bg-route.jpg";
import bgCorais from "/assets/bg-corais.jpg";

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
    </RouteSection>
  );
}
