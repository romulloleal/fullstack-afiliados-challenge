import { AppDataSource } from '@database'
import Transaction from '@entities/Transaction'

interface Request {
  page: number
  size: number
}

interface Response {
  transactions: Transaction[]
  hasMore: boolean
}

class GetTransactionsService {
  public async execute({ page, size }: Request): Promise<Response> {
    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const [transactions, count] = await transactionsRepository.findAndCount({
      relations: { transactionType: true },
      take: size || 10,
      skip: (page - 1) * size || 0,
      order: { saleDate: 'DESC' },
    })

    const hasMore = count - size * page > 0

    return { transactions, hasMore }
  }
}

export default GetTransactionsService
