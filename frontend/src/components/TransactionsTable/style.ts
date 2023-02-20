import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;

  .noTransactionsFound {
    text-align: center;
    color: var(--text-body);
  }
`

export const DataTable = styled.table`
  @media (max-width: 700px) {
    display: none;
  }
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;

    &.income {
      color: var(--green);
    }

    &.outcome {
      color: var(--red);
    }
  }
`
export const DataBox = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .transaction {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;
    gap: 1rem;

    .row {
      display: flex;
      gap: 0.5rem;

      .title {
        min-width: 6rem;
      }

      .description {
        color: var(--text-body);
        text-align: left;
      }

      .income {
        color: var(--green);
      }

      .outcome {
        color: var(--red);
      }
    }
  }
`
