import { useState } from 'react'

import { Container } from './styled'

export const Login = () => {
  const [step, setStep] = useState<'login' | 'register'>('login')
  return (
    <Container>
      {step === 'login' && (
        <>
          Bem vindo
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Senha' />
          <button type='submit'>Entrar</button>
          <div
            className='changeStep'
            onClick={() => setStep('register')}
            aria-hidden
          >
            Criar conta
          </div>
        </>
      )}
      {step === 'register' && (
        <>
          Criar conta
          <input type='text' placeholder='Nome' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Senha' />
          <button type='submit'>Criar conta</button>
          <div
            className='changeStep'
            onClick={() => setStep('login')}
            aria-hidden
          >
            Voltar
          </div>
        </>
      )}
    </Container>
  )
}
