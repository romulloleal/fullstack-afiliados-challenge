import InfiniteScroll from 'react-infinite-scroll-component'

import { ITransaction } from '~/interfaces'

import { Container, DataBox, DataTable } from './style'

interface TransactionsTableProps {
  transactions: ITransaction[]
  loadTransactions: () => void
  hasMore: boolean
}

export const TransactionsTable = ({
  transactions,
  loadTransactions,
  hasMore,
}: TransactionsTableProps) => {
  return (
    <Container>
      {transactions.length === 0 ? (
        <div className='noTransactionsFound'>Não há transações cadastradas</div>
      ) : (
        <>
          {/* display when scren has more than 700px */}
          <InfiniteScroll
            style={{ paddingBottom: 10, paddingTop: 10 }}
            className='hide-scroll-bar'
            dataLength={transactions.length}
            next={loadTransactions}
            hasMore={hasMore}
            loader={<></>}
          >
            <DataTable>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Vendedor</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.product}</td>
                    <td>{transaction.sellerName}</td>
                    <td>{transaction.transactionType.description}</td>
                    <td
                      className={`${
                        transaction.transactionType.nature === 'Entrada'
                          ? 'income'
                          : 'outcome'
                      }`}
                    >
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(transaction.price / 100)}
                    </td>
                    <td>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        new Date(transaction.saleDate)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </DataTable>

            {/* display when scren has less than 700px */}
            <DataBox>
              {transactions.map((transaction) => (
                <div className='transaction' key={transaction.id}>
                  <div className='row'>
                    <span className='title'>Produto:</span>
                    <span className='description'>{transaction.product}</span>
                  </div>
                  <div className='row'>
                    <span className='title'>Vendedor:</span>
                    <span className='description'>
                      {transaction.sellerName}
                    </span>
                  </div>
                  <div className='row'>
                    <span className='title'>Tipo:</span>
                    <span className='description'>
                      {transaction.transactionType.description}
                    </span>
                  </div>
                  <div className='row'>
                    <span className='title'>Valor:</span>
                    <span
                      className={`description ${
                        transaction.transactionType.nature === 'Entrada'
                          ? 'income'
                          : 'outcome'
                      }`}
                    >
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(transaction.price / 100)}
                    </span>
                  </div>
                  <div className='row'>
                    <span className='title'>Data:</span>
                    <span className='description'>
                      {new Intl.DateTimeFormat('pt-BR', {}).format(
                        new Date(transaction.saleDate)
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </DataBox>
          </InfiniteScroll>
        </>
      )}
    </Container>
  )
}
