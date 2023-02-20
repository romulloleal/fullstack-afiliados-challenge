import { Link } from 'react-router-dom'

import { Container } from './styled'

export const Login = () => {
  return (
    <Container>
      Bem vindo
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Senha' />
      <button type='submit'>Entrar</button>
      <Link to='/register'>Criar conta</Link>
    </Container>
  )
}
