import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Definir reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Definir estilos de body */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Definir estilos globais para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  /* Estilizar botões */
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  /* Estilos para inputs */
  input {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
  }

  /* Definir largura máxima para o conteúdo */
  .App {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;
