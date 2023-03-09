import express, { type Express, type Request, type Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.get('/', (req: Request, res: Response) => {
  res.send('Hi!')
})

export default app
