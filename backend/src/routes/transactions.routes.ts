import { Router } from 'express'

import multer from '@config/upload'
import AppError from '@errors/AppError'
import CreateTransactionsService from '@services/Transactions/CreateTransactionsService'
import GetTransactionsService from '@services/Transactions/GetTransactionsService'
import GetTransactionsBalanceService from '@services/Transactions/GetTransactionsBalanceService'

const transactionsRouter = Router()

// return the transactions list by pagination
transactionsRouter.get('/', multer.single, async (request, response) => {
  const { page, size } = request.query

  const getTransactions = new GetTransactionsService()
  const transactions = await getTransactions.execute({
    page: Number(page),
    size: Number(size),
  })

  return response.json({
    status: 'success',
    transactions,
  })
})

transactionsRouter.get(
  '/getTransactionsBalance',
  multer.single,
  async (request, response) => {
    const getTransactionsBalance = new GetTransactionsBalanceService()
    const balance = await getTransactionsBalance.execute()

    return response.json({
      status: 'success',
      balance,
    })
  }
)

// create transactions by file upload
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
      message: 'Arquivo enviado com sucesso!',
      transactions,
    })
  }
)

export default transactionsRouter
