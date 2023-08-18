import express from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import{validateSchema }from "../middlewares/validateSchema.js"
import { ShareSchema } from "../schemas/Sharpublish.Schema.js";
import { getHashtag, getPostByTrend, GetPublish, SharePublish } from "../controllers/share.controller.js";
const timelineRoute = express();

timelineRoute.post('/timeline',validateSchema(ShareSchema),validateAuth, SharePublish);
timelineRoute.get('/timeline',validateAuth, GetPublish);
timelineRoute.get('/hashtag', getHashtag);
timelineRoute.get('/hashtag/:id', getPostByTrend);


export default timelineRoute