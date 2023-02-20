import { ITransaction } from '~/interfaces'

import { Container, DataBox, DataTable } from './style'

const transactions: ITransaction[] = [
  {
    id: '57d9d40d-70fd-4cff-af71-b841bcf3a252',
    type: 2,
    product: 'CURSO DE BEM-ESTAR',
    price: 12750,
    sellerName: 'THIAGO OLIVEIRA',
    saleDate: '2022-01-16T17:13:54.000Z',
    transactionType: {
      type: 2,
      description: 'Venda afiliado',
      nature: 'Entrada',
    },
  },
  {
    id: 'bcda65f8-bfbb-4908-83d6-673cdb55abbc',
    type: 3,
    product: 'CURSO DE BEM-ESTAR',
    price: 4500,
    sellerName: 'THIAGO OLIVEIRA',
    saleDate: '2022-01-16T17:13:54.000Z',
    transactionType: {
      type: 3,
      description: 'Comissão paga',
      nature: 'Saída',
    },
  },
]

export const TransactionsTable = () => {
  return (
    <Container>
      {/* display when scren has more than 700px */}
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
              <td>{transaction.sellerName}</td>
              <td>{transaction.product}</td>
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
              <span className='description'>{transaction.sellerName}</span>
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
    </Container>
  )
}
