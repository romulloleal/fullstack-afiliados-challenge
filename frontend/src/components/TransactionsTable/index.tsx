import { ITransaction } from '~/interfaces/ITransaction'
import { Container, DataBox, DataTable } from './style'

const MockData: ITransaction[] = [
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
          {MockData.map((item) => (
            <tr key={item.id}>
              <td>{item.sellerName}</td>
              <td>{item.product}</td>
              <td>{item.transactionType.description}</td>
              <td
                className={`${
                  item.transactionType.nature === 'Entrada'
                    ? 'income'
                    : 'outcome'
                }`}
              >
                {item.price}
              </td>
              <td>{item.saleDate}</td>
            </tr>
          ))}
        </tbody>
      </DataTable>

      {/* display when scren has less than 700px */}
      <DataBox>
        {MockData.map((item) => (
          <div className='transaction'>
            <div className='row'>
              <span className='title'>Produto:</span>
              <span className='description'>{item.product}</span>
            </div>
            <div className='row'>
              <span className='title'>Vendedor:</span>
              <span className='description'>{item.sellerName}</span>
            </div>
            <div className='row'>
              <span className='title'>Tipo:</span>
              <span className='description'>
                {item.transactionType.description}
              </span>
            </div>
            <div className='row'>
              <span className='title'>Valor:</span>
              <span
                className={`description ${
                  item.transactionType.nature === 'Entrada'
                    ? 'income'
                    : 'outcome'
                }`}
              >
                {item.price}
              </span>
            </div>
            <div className='row'>
              <span className='title'>Data:</span>
              <span className='description'>{item.saleDate}</span>
            </div>
          </div>
        ))}
      </DataBox>
    </Container>
  )
}
