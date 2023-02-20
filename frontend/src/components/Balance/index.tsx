import incomeImg from '~/assets/income.svg'
import outcomeImg from '~/assets/outcome.svg'
import totalImg from '~/assets/total.svg'

import { Container } from './style'

export const Balance = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>- R$ 300,00</strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>R$ 700,00</strong>
      </div>
    </Container>
  )
}
