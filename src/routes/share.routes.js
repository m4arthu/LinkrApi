import express from "express";
import { LoginController,logOut,RegisterController } from "../controllers/authControllers.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import{validateSchema }from "../middlewares/validateSchema.js"
import { ShareSchema } from "../schemas/Sharpublish.Schema.js";
import { SharePublish } from "../controllers/share.controller.js";
const timelineRoute = express();

timelineRoute.post('/timeline',validateSchema(ShareSchema),validateAuth,SharePublish);


export default timelineRoute