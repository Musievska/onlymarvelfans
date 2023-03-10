import { SERVER_PORT } from '../constants.js'

const allowOrigin = `http://localhost:${SERVER_PORT}}`

export const corsOptions = {
  origin: (
    origin: string,
    callback: (arg0: Error | null, arg1?: boolean | undefined) => void,
  ): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (allowOrigin.indexOf(origin) || origin === '') {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
}
