import { config } from 'dotenv'
config()

export const Config = {
  server: {
    port: process.env.PORT ?? '3000'
  }
}