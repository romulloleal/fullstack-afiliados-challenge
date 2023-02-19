import { Router } from 'express'

import AuthenticateUserService from '@services/Session/AuthenticateUserService'

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

export default sessionsRouter
