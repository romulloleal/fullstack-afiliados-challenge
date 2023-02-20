import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1120px;
  margin-top: -5rem;

  @media (max-width: 600px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.total {
      background-color: var(--green);
      color: #fff;
    }
  }
`
