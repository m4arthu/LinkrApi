import express from "express";
import { LoginController,logOut,RegisterController } from "../controllers/authControllers.js";
import { searchUser } from "../controllers/userControllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import{validateSchema }from "../middlewares/validateSchema.js"
import {LoginSchema, RegisterSchema} from  "../schemas/authSchemas.js"
import timelineRoute from "./share.routes.js";
import likeRoute from "./like.routes.js";
const app = express();

app.post('/login',validateSchema(LoginSchema),LoginController);
app.post("/register",validateSchema(RegisterSchema),RegisterController);
app.delete("/logout", validateAuth, logOut);
app.get("/search/:text", validateAuth, searchUser);
app.use(timelineRoute)
app.use(likeRoute)

export const router = app