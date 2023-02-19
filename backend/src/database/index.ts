import { MainSeeder } from './seeds/MainSeeder'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'
import * as dotenv from 'dotenv'

dotenv.config()

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as number | undefined,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [process.env.TYPEORM_ENTITIES as string],
  migrations: [process.env.TYPEORM_MIGRATIONS as string],
  seeds: [MainSeeder],
}

export const AppDataSource = new DataSource(options)
AppDataSource.initialize()
