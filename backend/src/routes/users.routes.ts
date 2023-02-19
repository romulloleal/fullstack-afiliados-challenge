import CreateUserService from '@services/User/CreateUserService'
import { Router } from 'express'

const usersRouter = Router()

usersRouter.post('/createUser', async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService()
  await createUser.execute({ name, email, password })

  return response.json({
    status: 'success',
    message: 'Usuário criado com sucesso!',
  })
})

export default usersRouter
