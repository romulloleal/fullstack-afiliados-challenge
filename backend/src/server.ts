import 'reflect-metadata'

import * as dotenv from 'dotenv'
dotenv.config()

process.env.TZ = 'UTC'

import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'

import routes from './routes'
import AppError from './errors/AppError'

import './database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes, (_, res) => res.status(404).send('404 not found'))

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'internalServerError',
      err: err.message,
    })
  }
)

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!')
})
