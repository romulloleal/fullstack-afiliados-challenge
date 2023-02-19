import multer from 'multer'

const storage = multer.memoryStorage()

export default { single: multer({ storage }).single('file') }
