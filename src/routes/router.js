import express from "express";
import { LoginController,logOut,RegisterController } from "../controllers/authControllers.js";
import { searchUser } from "../controllers/userControllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import{validateSchema }from "../middlewares/validateSchema.js"
import {LoginSchema, RegisterSchema} from  "../schemas/authSchemas.js"
import timelineRoute from "./share.routes.js";
const app = express();

app.post('/login',validateSchema(LoginSchema),LoginController);
app.post("/register",validateSchema(RegisterSchema),RegisterController);
app.delete("/logout", validateAuth, logOut);
app.get("/search/:text", validateAuth, searchUser);
app.use(timelineRoute)

export const router = app