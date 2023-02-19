import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* RESET */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-size: 16px;

    line-height: 1.2;
    letter-spacing: 0rem;

    outline: none;

    box-sizing: border-box;
    word-wrap: break-word;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  /* COLORS */
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
`
