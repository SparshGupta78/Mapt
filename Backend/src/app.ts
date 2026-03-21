import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.router'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRouter)

mongoose
  .connect(process.env.DB_PATH as string)
  .then(() => {
    console.log('Database connected successfully')
  })
  .catch((err) => {
    console.log('Error connecting to database')
  })

export default app