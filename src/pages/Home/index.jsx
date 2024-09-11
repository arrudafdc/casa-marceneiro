import { MainContainer } from "../../styles/global";
import {
  AboutContainer,
  FormContainer,
  FormSection,
  Hero,
  ImageContainer,
  PhraseContainer,
  PhraseContainerBG,
  PlaylistContainer,
} from "./styles";
import aboutBg from "/assets/about1.jpg";
import phraseBg from "/assets/phrase-bg.jpg";

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
            Abraçada pelos coqueiros e beijada pelo mar. A Casa Marceneiro é um
            refúgio anfitrião de histórias de amor
          </p>
        </AboutContainer>
        <PlaylistContainer>
          <p>
            Aqui Milagres acontecem! <a href="#">Clique aqui</a> e escute com os
            pés descalços
          </p>
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
          <p>
            Onde possamos ser nós
            <br />
            De forma única e verdadeira
            <br />
            Fazer tudo do nosso jeito
            <br />
            Feito o marceneiro
            <br />
            Esculpe a madeira
          </p>
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
              Nossa Casa está aberta para te receber em outros formatos! Seja um
              casamento intimista ou grande, seja uma festa de welcome ou after,
              e até mesmo aniversários.
            </h2>
            <p>
              Nosso Atendimento Anfitrião está pronto para tirar todas as suas
              dúvidas!
            </p>
          </div>

          <FormContainer>
            <form action="">
              <input placeholder="Nome" type="text" />
              <input placeholder="Telefone" type="text" />
              <input placeholder="Email" type="text" />
              <textarea placeholder="Sua Mensagem"></textarea>
              <button>Enviar</button>
            </form>
          </FormContainer>
        </FormSection>
      </MainContainer>
    </>
  );
}