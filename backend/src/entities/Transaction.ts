import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import TransactionType from './TransactionType'

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  type: number

  @ManyToOne(() => TransactionType)
  @JoinColumn({ name: 'type', referencedColumnName: 'type' })
  transactionType: TransactionType

  @Column()
  product: string

  @Column()
  price: number

  @Column()
  sellerName: string

  @Column()
  saleDate: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default Transaction
