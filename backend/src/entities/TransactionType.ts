import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('transactions_type')
class TransactionType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  type: number

  @Column()
  description: string

  @Column()
  nature: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default TransactionType
