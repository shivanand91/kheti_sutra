import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/user.routes.js'

const app = express()

app.use(cors())
app.use(cookieParser())

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use("/api/user", router)



export default app