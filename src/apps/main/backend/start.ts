import { Router } from 'express'
import { LoadDependencies } from './dependencies'
import { Server } from './server'
import { Config } from '../../../Contexts/Shared/infrastructure/Config'
import { registerRoutes } from './routes'

function boostrap (): void {
  LoadDependencies()
    .then(() => {
      const router = Router()
      registerRoutes(router)

      const server = new Server(Config.server.port, router)
      server.listen()
        .catch(error => {
          console.log(error)
        })
    })
    .catch(console.error)
}
boostrap()
