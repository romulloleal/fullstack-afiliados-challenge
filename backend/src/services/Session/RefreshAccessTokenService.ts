import { AppDataSource } from '@database'
import { verify } from 'jsonwebtoken'

import AppError from '@errors/AppError'

import User from '@entities/User'
import authConfigRefresh from '@config/refreshToken'
import CreateAccessTokenService from './CreateAccessTokenService'
import CreateRefreshTokenService from './CreateRefreshTokenService'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

interface Response {
  accessToken: string
  refreshToken: string
}

class RefreshAccessTokenService {
  public async execute(refreshToken: string): Promise<Response> {
    try {
      const decoded = verify(refreshToken, authConfigRefresh.jwt.secret)

      const { sub: id } = decoded as TokenPayload

      const usersRepository = AppDataSource.getRepository(User)

      const findUser = await usersRepository.findOne({
        where: { id },
      })

      if (!findUser) throw new AppError('expiredRefreshToken')

      const createAccessTokenService = new CreateAccessTokenService()
      const accessToken = await createAccessTokenService.execute(id)

      const createRefreshTokenService = new CreateRefreshTokenService()
      const newRefreshToken = await createRefreshTokenService.execute(id)

      return { accessToken, refreshToken: newRefreshToken }
    } catch {
      throw new AppError('expiredRefreshToken')
    }
  }
}

export default RefreshAccessTokenService
