import express from 'express'
import { validateAuth } from '../middlewares/validateAuth.js'
import {
  getPostById,
  getUsersLiked,
  likedByUsers,
  postLike,
  postLikeByParams
} from '../controllers/likeControllers.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { likeSchema } from '../schemas/likeSchema.js'
const likeRoute = express()

likeRoute.get('/like', validateAuth, likedByUsers)
likeRoute.get('/like/:postId', validateAuth, getPostById)
likeRoute.post('/postlike', validateSchema(likeSchema), validateAuth, postLike)
likeRoute.post('/post/:postId', validateAuth, postLikeByParams)
likeRoute.get('/usersliked/:id', getUsersLiked);

export default likeRoute
