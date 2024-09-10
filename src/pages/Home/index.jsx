import { MainContainer } from "../../styles/global";
import { AboutContainer, Hero } from "./styles";
import aboutBg from "/assets/about1.jpg";

export function Home() {
  return (
    <>
      <Hero>
        <MainContainer>
          <h1>
            É doce casar no mar… <span>Permita-se!</span>
          </h1>
        </MainContainer>
      </Hero>
      <MainContainer>
        <AboutContainer>
          <div>
            <img src={aboutBg} alt="" />
          </div>

          <p>
            Abraçada pelos coqueiros e beijada pelo mar. A Casa Marceneiro é um
            refúgio anfitrião de histórias de amor
          </p>
        </AboutContainer>
      </MainContainer>
    </>
  );
}
