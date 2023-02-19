import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import TransactionType from '@entities/TransactionType'

export class TransactionsTypeSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const transactionsTypeRepository = dataSource.getRepository(TransactionType)

    const types = [
      { type: 1, description: 'Venda produtor', nature: 'Entrada' },
      { type: 2, description: 'Venda afiliado', nature: 'Entrada' },
      { type: 3, description: 'Comissão paga', nature: 'Saída' },
      { type: 4, description: 'Comissão recebida', nature: 'Entrada' },
    ]
    await Promise.all(
      types.map(async type => {
        const checkTypeExists = await transactionsTypeRepository.findOneBy({
          description: type.description,
        })

        if (!checkTypeExists) {
          await transactionsTypeRepository.insert(type)
        }
      })
    )
  }
}
