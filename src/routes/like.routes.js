import express from 'express'
import { validateAuth } from '../middlewares/validateAuth.js'
import {
  likedByUsers,
  postLike,
  postLikeByParams
} from '../controllers/likeControllers.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { likeSchema } from '../schemas/likeSchema.js'
const likeRoute = express()

likeRoute.get('/like', validateAuth, likedByUsers)
likeRoute.post('/postlike', validateSchema(likeSchema), validateAuth, postLike)
likeRoute.post('/post/:postId', validateAuth, postLikeByParams)

export default likeRoute
