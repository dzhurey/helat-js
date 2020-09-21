import express from 'express'
import models from '../models'

const router = express.Router()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await models.User.findAll()
  res.send(users)
})

export default router
