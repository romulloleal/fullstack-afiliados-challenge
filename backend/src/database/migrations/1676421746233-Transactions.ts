import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class Transactions1676421746233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'type',
            type: 'int',
          },
          {
            name: 'product',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'bigint',
          },
          {
            name: 'sellerName',
            type: 'varchar',
          },
          {
            name: 'saleDate',
            type: 'timestamp',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    )

    await queryRunner.createForeignKeys('transactions', [
      new TableForeignKey({
        name: 'transaction_type',
        columnNames: ['type'],
        referencedTableName: 'transactions_type',
        referencedColumnNames: ['type'],
      }),
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transactions', 'transaction_type')
    await queryRunner.dropTable('transactions')
  }
}
