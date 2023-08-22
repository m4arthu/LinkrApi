import express from 'express'
import {
  LoginController,
  logOut,
  RegisterController
} from '../controllers/authControllers.js'
import { searchUser } from '../controllers/userControllers.js'
import { validateAuth } from '../middlewares/validateAuth.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { LoginSchema, RegisterSchema } from '../schemas/authSchemas.js'
import timelineRoute from './share.routes.js'
import likeRoute from './like.routes.js'
import { pegandolink } from '../controllers/pegameta.js'
import followRoute from './follow.routes.js'
const app = express()

app.post('/login', validateSchema(LoginSchema), LoginController)
app.post('/register', validateSchema(RegisterSchema), RegisterController)
app.delete('/logout', validateAuth, logOut)
app.get('/search/:text', validateAuth, searchUser)
app.get('/proxy', pegandolink)
app.use(timelineRoute)
app.use(likeRoute)
app.use(followRoute)

export const router = app
