export interface ITransaction {
  id: string
  type: number
  product: string
  price: number
  sellerName: string
  saleDate: string
  transactionType: {
    type: number
    description: string
    nature: string
  }
}
