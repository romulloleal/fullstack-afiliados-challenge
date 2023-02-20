import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .uploadComponent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 100px;
    }

    .fileName {
      color: var(--text-body);
    }
  }

  input {
    display: none;
  }
`
