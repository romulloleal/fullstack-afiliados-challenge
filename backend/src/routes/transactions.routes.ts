import { Router } from 'express'

import multer from '@config/upload'
import AppError from '@errors/AppError'

const transactionsRouter = Router()

transactionsRouter.post(
  '/uploadTransactionFile',
  multer.single,
  async (request, response) => {
    const { file } = request

    if (!file) {
      throw new AppError('Arquivo de transações não informado')
    }

    return response.json({
      status: 'success',
    })
  }
)

export default transactionsRouter
