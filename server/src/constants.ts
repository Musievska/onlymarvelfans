import * as dotenv from 'dotenv'
dotenv.config()

export const SERVER_PORT = process.env.SERVER_PORT ?? 8000
