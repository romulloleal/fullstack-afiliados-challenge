import { Balance } from '~/components/Balance'
import { Header } from '~/components/Header'
import { TransactionsTable } from '~/components/TransactionsTable'

export const Home = () => {
  return (
    <>
      <Header />
      <Balance />
      <TransactionsTable />
    </>
  )
}
