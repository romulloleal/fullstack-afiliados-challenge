import { useEffect, useState } from 'react'

import { Balance } from '~/components/Balance'
import { Header } from '~/components/Header'
import { NewTransactionsModal } from '~/components/NewTransactionsModal'
import { TransactionsTable } from '~/components/TransactionsTable'
import { ITransaction } from '~/interfaces'
import TransactionAPI from '~/services/TransactionAPI'

export const Home = () => {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false)
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    loadTransactions()
  }, [])

  const loadTransactions = async () => {
    const response = await TransactionAPI.getTransactions({ page: nextPage })
    setTransactions([...transactions, ...response.transactions])
    setHasMore(response.hasMore)

    if (response.hasMore) {
      setNextPage(nextPage + 1)
    }
  }

  const addMoreTransactions = async (newTansactions: ITransaction[]) => {
    setTransactions([...newTansactions, ...transactions])
  }

  const handleTransactionsModal = () => {
    setIsNewTransactionsModalOpen(!isNewTransactionsModalOpen)
  }

  return (
    <>
      <Header openNewTransactionsModal={handleTransactionsModal} />
      <Balance />
      <TransactionsTable
        transactions={transactions}
        loadTransactions={loadTransactions}
        hasMore={hasMore}
      />
      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleTransactionsModal}
        addMoreTransactions={addMoreTransactions}
      />
    </>
  )
}
