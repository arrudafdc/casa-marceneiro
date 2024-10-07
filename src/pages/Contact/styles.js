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

  form {
    font-family: "Comfortaa", sans-serif;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

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
