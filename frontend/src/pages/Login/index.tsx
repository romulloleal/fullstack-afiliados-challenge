import { useState } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '~/providers/Auth'

import { Container } from './styled'

export const Login = () => {
  const { user, signIn, signUp } = useAuth()

  if (user) {
    console.log(user)
    return <Navigate to='/' />
  }

  const [step, setStep] = useState<'login' | 'register'>('login')

  // states for login
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  // states for register
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    await signIn(emailLogin, passwordLogin)
  }

  const handleSignUp = async () => {
    await signUp(name, email, password)
  }

  return (
    <Container>
      {step === 'login' && (
        <>
          Bem vindo
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => setEmailLogin(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <button type='button' onClick={handleSignIn}>
            Entrar
          </button>
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
          <input
            type='text'
            placeholder='Nome'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='button' onClick={handleSignUp}>
            Criar conta
          </button>
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
