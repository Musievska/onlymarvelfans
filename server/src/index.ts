import * as dotenv from 'dotenv'

import app from './app.js'
import { connectDB } from './config/db.config.js'
dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT ?? 8000

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(SERVER_PORT, async (): Promise<void> => {
  await connectDB()
  console.log(`⚡️[server]: running on ${SERVER_PORT}`)
})
