import express from 'express'
import { validateAuth } from '../middlewares/validateAuth.js'
import {
  checkFollowing,
  followUnfollow,
  getFollowing
} from '../controllers/followControllers.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { followSchema } from '../schemas/followSchema.js'

const followRoute = express()

followRoute.get('/followers', validateAuth, getFollowing)
followRoute.get('/checkFollow', validateAuth, checkFollowing)
followRoute.post(
  '/follow',
  validateSchema(followSchema),
  validateAuth,
  followUnfollow
)

export default followRoute
