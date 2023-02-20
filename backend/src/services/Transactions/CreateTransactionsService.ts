import { AppDataSource } from '@database'
import Transaction from '@entities/Transaction'
import AppError from '@errors/AppError'
import { NormalizeTransaction } from './NormalizeTransaction'

interface Request {
  file: Express.Multer.File
}

class CreateTransactionsService {
  public async execute({
    file,
  }: Request): Promise<(Transaction | null | undefined)[]> {
    if (file.mimetype !== 'text/plain') {
      throw new AppError('Apenas arquivos de texto são permitidos!')
    }

    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const fileText = Buffer.from(file.buffer).toString('utf-8')

    const splitTransactions = fileText.split('\n')

    const normalizedData = splitTransactions.map((transaction, index) =>
      NormalizeTransaction({
        transaction: transaction.trimEnd(),
        line: index + 1,
      })
    )

    // filter only valid transactions and exclude null/blank lines
    const validTransactions = normalizedData.filter(transaction => transaction)

    // saves transactions and return it with relationships
    const transactions = await Promise.all(
      validTransactions.map(async transaction => {
        if (transaction) {
          const savedTransaction = await transactionsRepository.save(
            transaction
          )
          return await transactionsRepository.findOne({
            where: { id: savedTransaction.id },
            relations: { transactionType: true },
          })
        }
      })
    )

    return transactions
  }
}

export default CreateTransactionsService
