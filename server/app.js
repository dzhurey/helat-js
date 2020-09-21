/* eslint-disable import/first */
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import 'regenerator-runtime/runtime'
import dotenv from 'dotenv'

dotenv.config()

import { handler as errorHandler } from './src/middlewares/errorHandler'
import indexRouter from './src/routes/index'
import usersRouter from './src/routes/users'

import db from './src/models'

const app = express()

db.sequelize.sync()

// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(errorHandler)

export default app
