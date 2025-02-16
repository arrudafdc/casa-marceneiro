import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../../styles/global";
import { ContactSection } from "./styles";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
  const location = useLocation();
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    document.title = "Casa Marceneiro - Contato";
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000 });
      AOS.refresh();
    }, 500); // Pequeno delay para garantir que os elementos estejam prontos
  }, [location]);

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      city: city,
      email: email,
      number: number,
      message: message,
    };

    emailjs
      .send(
        "service_tcre1k7",
        "template_adr4grp",
        templateParams,
        "ThopOSqk7ngT6W1RM"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setCity("");
          setEmail("");
          setNumber("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <MainContainer>
      <ContactSection>
        <h1 data-aos="fade-up">
          Nosso Atendimento Anfitrião está pronto{" "}
          <span>para tirar todas as suas dúvidas!</span>
        </h1>
        <div>
          <form
            onSubmit={sendEmail}
            data-aos="zoom-out"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="city">Sua cidade</label>
            <input
              type="text"
              id="city"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="number">Número</label>
            <input
              type="tel"
              id="number"
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              pattern="\d{11}"
              title="Digite um número de telefone válido"
            />
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </ContactSection>
    </MainContainer>
  );
}
