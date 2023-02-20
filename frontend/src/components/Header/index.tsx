import { useAuth } from '~/providers/Auth'

import { Container, Content } from './style'

interface HeaderProps {
  openNewTransactionsModal: () => void
}

export const Header = ({ openNewTransactionsModal }: HeaderProps) => {
  const { user, signOut } = useAuth()
  return (
    <Container>
      <Content>
        <div className='userInformation'>
          <h3>Olá, {user.name}</h3> |{' '}
          <div className='logout' onClick={signOut} aria-hidden>
            Sair
          </div>
        </div>
        <div className='header'>
          <span className='title'>Fullstack Afiliados</span>
          <button type='button' onClick={openNewTransactionsModal}>
            Enviar transações
          </button>
        </div>
      </Content>
    </Container>
  )
}
