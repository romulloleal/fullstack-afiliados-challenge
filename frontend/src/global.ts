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

  /* COLORS */
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  input {
    background: none;
    border: none;
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

  a {
    text-decoration: none;
    color: var(--text-body);

    transition: filter 0.2s;

    &:hover {
      /* text-decoration: underline; */
      filter: brightness(0.7);
    }
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

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
