import { useState } from 'react'

import Modal from 'react-modal'

import closeImg from '~/assets/close.svg'
import { ITransaction } from '~/interfaces'
import TransactionAPI from '~/services/TransactionAPI'

import FileUpload from '../FileUpload'

import { Container } from './style'

interface NewTransactionsModalProps {
  isOpen: boolean
  onRequestClose: () => void
  addMoreTransactions: (newTransactions: ITransaction[]) => void
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
  addMoreTransactions,
}: NewTransactionsModalProps) => {
  const [file, setFile] = useState<File | undefined>(undefined)

  const handleSendFile = async () => {
    if (file) {
      const newTransactions = await TransactionAPI.uploadTransactionFile({
        file,
      })
      addMoreTransactions(newTransactions)
      setFile(undefined)
      onRequestClose()
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      ariaHideApp={false}
    >
      <button type='button' className='react-modal-close'>
        <img src={closeImg} alt='Fechar modal' onClick={onRequestClose} />
      </button>

      <Container>
        <h2>Cadastrar novas transações</h2>
        <FileUpload file={file} callback={setFile} />
        <button type='button' className='sendFile' onClick={handleSendFile}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
