import { Link } from 'react-router-dom'

import { Container } from './styled'

export const Register = () => {
  return (
    <Container>
      Criar conta
      <input type='text' placeholder='Nome' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Senha' />
      <button type='submit'>Criar conta</button>
      <Link to='/login'>Voltar</Link>
    </Container>
  )
}
