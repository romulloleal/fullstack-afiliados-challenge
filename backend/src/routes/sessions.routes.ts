import { Router } from 'express'

import AuthenticateUserService from '@services/Session/AuthenticateUserService'
import RefreshAccessTokenService from '@services/Session/RefreshAccessTokenService'

const sessionsRouter = Router()

sessionsRouter.post('/authenticate', async (request, response) => {
  const { email, password } = request.body

  const authenticateUser = new AuthenticateUserService()
  const authenticatedUser = await authenticateUser.execute({
    email,
    password,
  })

  return response.json({
    status: 'success',
    authenticatedUser,
  })
})

sessionsRouter.post('/refreshAccessToken', async (request, response) => {
  const { refreshToken } = request.body
  const refreshAccessTokenService = new RefreshAccessTokenService()
  const newCredentials = await refreshAccessTokenService.execute(refreshToken)
  return response.json({ status: 'sucess', data: newCredentials })
})

export default sessionsRouter
