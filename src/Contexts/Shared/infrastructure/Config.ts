import { config } from 'dotenv'
import { type ProjectConfig } from '../domain/ProjectConfig'
config()

export const Config: ProjectConfig = {
  server: {
    port: process.env.PORT ?? '3000'
  }
}
