import { AppDataSource } from '@database'
import Transaction from '@entities/Transaction'

interface Response {
  income: number
  outcome: number
}

class GetTransactionsBalanceService {
  public async execute(): Promise<Response> {
    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const incomeTransactions = await transactionsRepository.find({
      relations: { transactionType: true },
      where: { transactionType: { nature: 'Entrada' } },
    })

    const income = incomeTransactions.reduce(
      (acc, transaction) => acc + transaction.price,
      0
    )

    const outcomeTransactions = await transactionsRepository.find({
      relations: { transactionType: true },
      where: { transactionType: { nature: 'Saída' } },
    })

    const outcome = outcomeTransactions.reduce(
      (acc, transaction) => acc + transaction.price,
      0
    )

    return { income, outcome }
  }
}

export default GetTransactionsBalanceService
