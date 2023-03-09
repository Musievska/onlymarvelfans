import express, { type Express, type Request, type Response } from 'express'
import * as dotenv from 'dotenv'
import { connectDB } from './config/db.config.js'
dotenv.config()

const app: Express = express()
const SERVER_PORT = process.env.SERVER_PORT ?? 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Hi!')
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(SERVER_PORT, async (): Promise<void> => {
  await connectDB()
  console.log(`⚡️[server]: running on ${SERVER_PORT}`)
})
