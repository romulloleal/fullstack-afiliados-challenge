import { IBalance, ITransaction } from '~/interfaces'
import { api } from '~/services/api'

import { getAccessToken } from '../getTokens'

const path = '/transactions'

const getTransactionsBalance = async (): Promise<IBalance> => {
  const response = await api.get(
    `${path}/getTransactionsBalance`,
    await getAccessToken()
  )

  const { income, outcome } = response.data

  return { income, outcome }
}

const getTransactions = async (): Promise<{
  transactions: ITransaction[]
  hasMore: boolean
}> => {
  const response = await api.get(`${path}`, await getAccessToken())

  const { transactions, hasMore } = response.data

  return { transactions, hasMore }
}

const uploadTransactionFile = async ({
  file,
}: {
  file: File
}): Promise<ITransaction[]> => {
  const response = await api.post(`${path}`, { file }, await getAccessToken())

  const { transactions } = response.data

  return transactions
}

export default {
  getTransactionsBalance,
  getTransactions,
  uploadTransactionFile,
}
