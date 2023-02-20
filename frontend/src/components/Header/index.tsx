import { Container, Content } from './style'

interface HeaderProps {
  openNewTransactionsModal: () => void
}

export const Header = ({ openNewTransactionsModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <span className='title'>Fullstack Afiliados</span>
        <button type='button' onClick={openNewTransactionsModal}>
          Enviar transações
        </button>
      </Content>
    </Container>
  )
}
