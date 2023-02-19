import AppError from '@errors/AppError'

export const NormalizeTransaction = ({
  transaction,
  line,
}: {
  transaction: string
  line: number
}) => {
  if (transaction.length === 0) {
    return null
  }

  const type = Number(transaction.substring(0, 1))
  const saleDate = new Date(transaction.substring(1, 26))
  const product = transaction.substring(26, 56).trimEnd()
  const price = Number(transaction.substring(56, 66))
  const sellerName = transaction.substring(66, 86).trimEnd()

  if (isNaN(type)) {
    throw new AppError(
      `Linha ${line}, campo tipo suporta apenas números inteiros! (inicio: 1, fim: 1)`
    )
  }
  if (isNaN(saleDate.getTime())) {
    throw new AppError(
      `Linha ${line}, campo data é invalido! (inicio: 2, fim: 26)`
    )
  }
  if (product.length === 0) {
    throw new AppError(
      `Linha ${line}, campo produto está vázio! (inicio: 27, fim: 56)`
    )
  }
  if (isNaN(price)) {
    throw new AppError(
      `Linha ${line}, campo valor suporta apenas números inteiros! (inicio: 57, fim: 66)`
    )
  }
  if (sellerName.length === 0) {
    throw new AppError(
      `Linha ${line}, campo vendedor está vázio! (inicio: 67, fim: 86)`
    )
  }

  return { type, saleDate, product, price, sellerName }
}
