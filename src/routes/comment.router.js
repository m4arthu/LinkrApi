import express from 'express'
import { validateAuth } from '../middlewares/validateAuth.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { addComment, getComments } from '../controllers/comment.controller.js'

const commentRouter = express()

commentRouter.post('/comment/post/:id', validateAuth, addComment)
commentRouter.get('/comment/post/:id', validateAuth, getComments)

export default commentRouter
