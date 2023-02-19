import { Router } from 'express'

import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import transactionsRouter from './transactions.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/transactions', transactionsRouter)

export default routes
