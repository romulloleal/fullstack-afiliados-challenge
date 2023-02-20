import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;

  .title {
    font-size: 1.5rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userInformation {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .logout:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
