import express, { type Router, type NextFunction, type Request, type Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import httpStatus from 'http-status'
import type http from 'node:http'
import type Logger from '../../../Contexts/Shared/domain/Logger'
import container from './dependencies'

export class Server {
  private readonly express: express.Express
  readonly port: string
  private readonly logger: Logger
  httpServer?: http.Server

  constructor (port: string, routes: Router) {
    this.port = port
    this.logger = container.get('Shared.Logger')
    this.express = express()
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))
    const router = express.Router()
    router.use(cors())
    router.use(routes)
    this.express.use(router)

    router.use((request: Request, response: Response, next: NextFunction) => {
      this.logger.info(`${request.method} - ${request.url} - ${httpStatus[404]}`)
      response.status(httpStatus.NOT_FOUND).json({ error: httpStatus.NOT_FOUND, body: httpStatus[404] })
    })

    router.use((error: Error, request: Request, response: Response, next: NextFunction) => {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error.message)
    })
  }

  async listen (): Promise<void> {
    await new Promise<void>((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(
          `  Backoffice Backend App is running at http://localhost:${this.port}`
        )
        this.logger.info('  Press CTRL-C to stop\n')
        resolve()
      })
    })
  }
}
