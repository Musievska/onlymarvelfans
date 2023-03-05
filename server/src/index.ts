import express, { type Express, type Request, type Response } from 'express'
import * as dotenv from 'dotenv'
// import * as cookie-parser from 'cookie-parser';

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hi!')
})

app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`⚡️[server]: running on ${port}`)
})
