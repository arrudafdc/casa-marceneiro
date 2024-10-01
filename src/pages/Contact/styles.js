import styled from "styled-components";

export const ContactSection = styled.section`
  margin-bottom: 10rem;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  span {
    display: block;
  }

  div {
    margin-bottom: 10rem;
  }

  img {
    width: 100%;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: normal;
  }

  p {
    font-size: 1rem;
    max-width: 50%;
    margin-bottom: 2rem;
    font-family: "Comfortaa", sans-serif;
  }

  form {
    font-family: "Comfortaa", sans-serif;
    max-width: 600px;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
      font-family: "Comfortaa", sans-serif;
    }

    textarea {
      padding: 0.5rem;
      height: 200px;
      font-family: "Comfortaa", sans-serif;
      margin-bottom: 1rem;
    }

    button {
      height: 50px;
      border: 0;
      background: #d4af7a;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      background-color: #c19a6b; /* Substitua por qualquer cor desejada */
    }
  }

  @media (max-width: 1000px) {
    div {
      margin-bottom: 5rem;
    }
    p {
      max-width: 100%;
    }

    span {
      display: initial;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.25rem;
    }
  }
`;
