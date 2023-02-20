import { Container, Content } from './style'

export const Header = () => {
  return (
    <Container>
      <Content>
        <span className='title'>Fullstack Afiliados</span>
        <button type='button'>Enviar transações</button>
      </Content>
    </Container>
  )
}
