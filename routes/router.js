import express from "express";
import { LoginController,RegisterController } from "../controllers/authControllers.js";
import{validateSchema }from "../middleweres/validateSchema.js"
import {LoginSchema, RegisterSchema} from  "../schemas/authSchemas.js"
const app = express();

app.post('/login',validateSchema(LoginSchema),LoginController)
app.post("/register",validateSchema(RegisterSchema),RegisterController)

export const router = app