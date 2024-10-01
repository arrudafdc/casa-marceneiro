import { MainContainer } from "../../styles/global";
import { ContactSection } from "./styles";
import bgContact from "/assets/bg-contact.jpg";

export function Contact() {
  return (
    <MainContainer>
      <ContactSection>
        <h1>
          Nosso Atendimento Anfitrião está pronto{" "}
          <span>para tirar todas as suas dúvidas!</span>
        </h1>
        <div>
          <img src={bgContact} />
        </div>
        <h2>Entre em contato</h2>
        <p>
          Ligue ou envie um e-mail para saber mais ou agendar uma visita com a
          gente.
        </p>
        <p>
          Phone: 82 99999-9999 <br />
          Email: casamarceneiro@gmail.com
        </p>
        <h2>Preencha o formulário e entraremos em contato com você em breve</h2>
        <p>
          {" "}
          Nossa Casa está aberta para te receber em outros formatos! Seja um
          casamento intimista ou grande, seja uma festa de welcome ou after, e
          até mesmo aniversários.
        </p>
        <form>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" />
          <label htmlFor="city">Sua cidade</label>
          <input type="text" id="city" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="number">Número</label>
          <input type="tel" id="number" />
          <label htmlFor="message">Menssagem</label>
          <textarea name="message" id="message"></textarea>
          <button>Enviar</button>
        </form>
      </ContactSection>
    </MainContainer>
  );
}
