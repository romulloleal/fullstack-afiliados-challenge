import { useRef } from 'react'

import trashImg from '~/assets/trash.svg'
import uploadImg from '~/assets/upload.svg'

import { Container } from './style'

interface FileUploadProps {
  callback: (value: File | undefined) => void
  file?: File
}

const FileUpload = ({ callback, file }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onFileChange = async () => {
    const file = inputRef.current?.files
    if (file) {
      callback(file[0])
      inputRef.current.value = ''
    }
  }

  const handleInput = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <Container>
        {!file && (
          <div onClick={handleInput} aria-hidden className='uploadComponent'>
            <img src={uploadImg} alt='Escolher arquivo' />
            Escolher arquivo
          </div>
        )}
        {file && (
          <div
            onClick={() => callback(undefined)}
            aria-hidden
            className='uploadComponent'
          >
            <img src={trashImg} alt='Excluir arquivo' />
            Excluir arquivo
          </div>
        )}
        <input
          ref={inputRef}
          type='file'
          accept='text/plain'
          onChange={onFileChange}
        />
      </Container>
    </>
  )
}

export default FileUpload
