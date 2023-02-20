import { useState } from 'react'

import { Balance } from '~/components/Balance'
import { Header } from '~/components/Header'
import { NewTransactionsModal } from '~/components/NewTransactionsModal'
import { TransactionsTable } from '~/components/TransactionsTable'

export const Home = () => {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false)

  const handleTransactionsModal = () => {
    setIsNewTransactionsModalOpen(!isNewTransactionsModalOpen)
  }

  return (
    <>
      <Header openNewTransactionsModal={handleTransactionsModal} />
      <Balance />
      <TransactionsTable />
      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleTransactionsModal}
      />
    </>
  )
}
