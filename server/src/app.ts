import express, { type Express, type Request, type Response } from 'express'
import cors, { type CorsOptionsDelegate } from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import { corsOptions } from './config/corsOptions.config.js'

const app: Express = express()

app.use(express.json())
app.use(cors(corsOptions as unknown as CorsOptionsDelegate))
app.use(morgan('tiny'))
app.use(helmet({ crossOriginEmbedderPolicy: false }))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.end('Hi!')
})

export default app
