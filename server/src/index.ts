import { SERVER_PORT } from './constants.js'
import app from './app.js'
import { connectDB } from './config/db.config.js'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(SERVER_PORT, async (): Promise<void> => {
  await connectDB()
  console.log(`⚡️[server]: running on ${SERVER_PORT}`)
})
