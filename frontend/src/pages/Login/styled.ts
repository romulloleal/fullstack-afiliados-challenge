import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: var(--shape);

  input {
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid var(--text-body);
    padding: 0.5rem;
  }

  button[type='button'] {
    width: 50%;
    padding: 0 1.5rem;
    height: 2.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .changeStep {
    cursor: pointer;
    color: var(--text-body);

    transition: filter 0.2s;

    &:hover {
      /* text-decoration: underline; */
      filter: brightness(0.7);
    }
  }
`
