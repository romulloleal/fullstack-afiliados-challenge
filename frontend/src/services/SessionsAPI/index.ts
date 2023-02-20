import { IAuthState, IUser } from '~/interfaces'
import { api } from '~/services/api'

import { getAccessToken } from '../getTokens'

const path = '/sessions'

const authenticate = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<IAuthState> => {
  const response = await api.post(`${path}/authenticate`, {
    email,
    password,
  })

  const { user, accessToken, refreshToken } = response.data.authenticatedUser

  return { user, accessToken, refreshToken }
}

const refreshAccessToken = async (): Promise<{
  accessToken: string
  refreshToken: string
}> => {
  const response = await api.post(`${path}/refreshAccessToken`, {
    refreshToken: localStorage.getItem('@fullstackAfiliados:refreshToken'),
  })

  const { accessToken, refreshToken } = response.data

  return { accessToken, refreshToken }
}

export default {
  authenticate,
  refreshAccessToken,
}
