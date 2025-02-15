import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../../styles/global";
import { ContactSection } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
  const location = useLocation();

  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
      AOS.refresh();
    }, 200); // Pequeno delay para garantir que os elementos estejam prontos
  }, [location]);

  return (
    <MainContainer>
      <ContactSection>
        <h1 data-aos="fade-up">
          Nosso Atendimento Anfitrião está pronto{" "}
          <span>para tirar todas as suas dúvidas!</span>
        </h1>
        <div>
          <form
            data-aos="zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
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
        </div>
      </ContactSection>
    </MainContainer>
  );
}
