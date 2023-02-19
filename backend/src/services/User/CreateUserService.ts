import { hash } from 'bcryptjs'
import { AppDataSource } from '@database'

import AppError from '@errors/AppError'
import User from '@entities/User'
import PasswordCheckService from './PasswordCheckService'
import CheckValidEmailService from './CheckValidEmailService'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<void> {
    const usersRepository = AppDataSource.getRepository(User)

    name = name.trim()
    email = email.toLowerCase().trim()

    if (name.length === 0) {
      throw new AppError('Nome não pode estar em branco!')
    }

    const checkValidEmail = new CheckValidEmailService()
    if (!(await checkValidEmail.execute(email))) {
      throw new AppError('E-mail invalido!')
    }

    const checkEmailExists = await usersRepository.findOne({
      where: { email },
    })
    if (checkEmailExists) {
      throw new AppError('E-mail já está em uso!')
    }

    if (password.length < 6) {
      throw new AppError('Senha precisa ter pelo menos 6 caracteres!')
    }

    const testBlankSpace = new RegExp('\\s+')
    if (testBlankSpace.test(password)) {
      throw new AppError('Senha não pode ter espaços!')
    }

    const passwordCheck = new PasswordCheckService()
    if (!(await passwordCheck.execute(password))) {
      throw new AppError(
        'Senha precisa de pelo menos 1 letra, 1 numero e um caractere especial!'
      )
    }

    const hashedPassword = await hash(password, 8)

    await usersRepository.save({
      name,
      email,
      password: hashedPassword,
    })
  }
}

export default CreateUserService
