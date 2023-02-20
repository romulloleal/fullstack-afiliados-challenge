import React, { createContext, useContext, useMemo, useState } from 'react'

import { IAuthState, IAuthContext } from '~/interfaces'
import { api } from '~/services/api'
import SessionsAPI from '~/services/SessionsAPI'

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@fullstackAfiliados:user')
    const accessToken = localStorage.getItem('@fullstackAfiliados:accessToken')
    const refreshToken = localStorage.getItem(
      '@fullstackAfiliados:refreshToken'
    )

    if (user && accessToken && refreshToken) {
      return { user: JSON.parse(user), accessToken, refreshToken }
    }

    return {} as IAuthState
  })

  const signUp = async (name: string, email: string, password: string) => {
    await api.post('/user/crateAccount', {
      name,
      email,
      password,
    })

    await signIn(email, password)
  }

  const signIn = async (email: string, password: string) => {
    const response = await SessionsAPI.authenticate({ email, password })
    const { user, accessToken, refreshToken } = response

    localStorage.setItem('@fullstackAfiliados:user', JSON.stringify(user))
    localStorage.setItem('@fullstackAfiliados:accessToken', accessToken)
    localStorage.setItem('@fullstackAfiliados:refreshToken', refreshToken)

    setData({ user, accessToken, refreshToken })
  }

  const signOut = async () => {
    localStorage.removeItem('@fullstackAfiliados:user')
    localStorage.removeItem('@fullstackAfiliados:accessToken')
    localStorage.removeItem('@fullstackAfiliados:refreshToken')

    setData({} as IAuthState)
  }

  const refreshAccessToken = async () => {
    const response = await SessionsAPI.refreshAccessToken()
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      response
    localStorage.setItem('@fullstackAfiliados:accessToken', newAccessToken)
    localStorage.setItem('@fullstackAfiliados:refreshToken', newRefreshToken)

    return newAccessToken
  }

  const authProvider = useMemo<IAuthContext>(
    () => ({
      user: data.user,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      signUp,
      signIn,
      signOut,
      refreshAccessToken,
    }),
    [
      data.user,
      data.accessToken,
      data.refreshToken,
      signUp,
      signIn,
      signOut,
      refreshAccessToken,
    ]
  )

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export default AuthProvider
