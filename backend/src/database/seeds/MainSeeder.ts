import { TransactionsTypeSeeder } from './TransactionsTypeSeeder'
import { DataSource } from 'typeorm'
import { runSeeder, Seeder } from 'typeorm-extension'

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, TransactionsTypeSeeder)
  }
}
