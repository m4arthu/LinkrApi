import express from 'express'
import { validateAuth } from '../middlewares/validateAuth.js'
import checkFollowing from '../controllers/followControllers.js'

const followRoute = express()

followRoute.get('/checkFollow', validateAuth, checkFollowing)

export default followRoute
