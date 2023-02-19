import { AppDataSource } from '@database'
import { compare } from 'bcryptjs'

import AppError from '@errors/AppError'

import User from '@entities/User'
import CreateAccessTokenService from './CreateAccessTokenService'

interface Request {
  email: string
  password: string
}

interface AutenticatedUser {
  id: string
  name: string
  email: string
}

interface Response {
  user: AutenticatedUser
  accessToken: string
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new AppError('E-mail ou senha estão incorretos', 400)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('E-mail ou senha estão incorretos', 400)
    }

    const createAccessTokenService = new CreateAccessTokenService()
    const accessToken = await createAccessTokenService.execute(user.id)

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    }
  }
}

export default AuthenticateUserService
