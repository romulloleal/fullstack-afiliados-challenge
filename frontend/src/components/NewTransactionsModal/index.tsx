import { useState } from 'react'

import Modal from 'react-modal'

import closeImg from '~/assets/close.svg'

import FileUpload from '../FileUpload'

import { Container } from './style'

interface NewTransactionsModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {
  const [file, setFile] = useState<File | undefined>(undefined)
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
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
