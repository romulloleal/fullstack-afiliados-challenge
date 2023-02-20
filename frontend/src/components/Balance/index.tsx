import { useEffect, useState } from 'react'

import incomeImg from '~/assets/income.svg'
import outcomeImg from '~/assets/outcome.svg'
import totalImg from '~/assets/total.svg'
import TransactionAPI from '~/services/TransactionAPI'

import { Container } from './style'

export const Balance = () => {
  const [income, setIncome] = useState(0)
  const [outcome, setOutcome] = useState(0)

  useEffect(() => {
    async function loadBalance() {
      const response = await TransactionAPI.getTransactionsBalance()

      setIncome(response.income)
      setOutcome(response.outcome)
    }

    loadBalance()
  }, [])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(income / 100)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>
          -{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(outcome / 100)}
        </strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format((income - outcome) / 100)}
        </strong>
      </div>
    </Container>
  )
}
