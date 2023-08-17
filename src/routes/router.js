import express from "express";
import { LoginController,logOut,RegisterController } from "../controllers/authControllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import{validateSchema }from "../middlewares/validateSchema.js"
import {LoginSchema, RegisterSchema} from  "../schemas/authSchemas.js"
const app = express();

app.post('/login',validateSchema(LoginSchema),LoginController);
app.post("/register",validateSchema(RegisterSchema),RegisterController);
app.delete("/logout", validateAuth, logOut);

export const router = app