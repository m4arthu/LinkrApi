import express from "express";
import { LoginController,logOut,RegisterController } from "../controllers/authControllers.js";
import { validateAuth } from "../middleweres/validateAuth.js";
import{validateSchema }from "../middleweres/validateSchema.js"
import {LoginSchema, RegisterSchema} from  "../schemas/authSchemas.js"
const app = express();

app.post('/login',validateSchema(LoginSchema),LoginController);
app.post("/register",validateSchema(RegisterSchema),RegisterController);
app.delete("/logout", validateAuth, logOut);

export const router = app