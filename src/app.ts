import express, { Application } from 'express'
import route from './routes/index'
import cors from 'cors'
import bodyParser from 'body-parser'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', route)

export default app
