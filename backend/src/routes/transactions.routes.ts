import { Router } from 'express'

import multer from '@config/upload'
import AppError from '@errors/AppError'
import CreateTransactionsService from '@services/Transactions/CreateTransactionsService'

const transactionsRouter = Router()

transactionsRouter.post(
  '/uploadTransactionFile',
  multer.single,
  async (request, response) => {
    const { file } = request

    if (!file) {
      throw new AppError('Arquivo de transações não informado')
    }

    const createTransactions = new CreateTransactionsService()
    const transactions = await createTransactions.execute({ file })

    return response.json({
      status: 'success',
      transactions,
    })
  }
)

export default transactionsRouter
