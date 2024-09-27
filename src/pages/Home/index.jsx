import { MainContainer } from "../../styles/global";
import {
  AboutContainer,
  FormContainer,
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
import teste from "/assets/gallery/img3.jpg";
import { VideoPlayer } from "../components";

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
            <img src={phraseBg} alt="" />
          </div>

          <p>
            Abraçada pelos coqueiros e beijada pelo mar.{" "}
            <span>Nasce um refúgio anfitrião de histórias de amor</span>
          </p>
        </AboutContainer>
        <PlaylistContainer>
          <p>
            Aqui Milagres acontecem! <a href="#">Clique aqui</a> e escute com os
            pés descalços
          </p>
          <img src={saxIcon} alt="" />
        </PlaylistContainer>
      </MainContainer>
      <PhraseContainerBG>
        <PhraseContainer>
          <p>
            Quero viver no teu abraço
            <br />
            Quero morar no teu sorriso
            <br />
            Eternizar nossos laços
            <br />
            Em Casa e no paraíso
          </p>
          <ItalicParh>
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
          <p>
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
          <img src={aboutBg} alt="" />
        </ImageContainer>
      </PhraseContainerBG>
      <MainContainer>
        <FormSection>
          <div>
            <h2>
              Nosso refúgio à beira-mar está pronto para receber sua celebração!
              Inscreva-se para receber detalhes e mais informações.
            </h2>
            <p>
              Nosso Atendimento Anfitrião está pronto para tirar todas as suas
              dúvidas!
            </p>
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
