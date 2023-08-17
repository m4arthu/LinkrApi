import {findSessionDB, registerQuery,} from "../repositorys/authQuerys.js"
import { postMyShare } from "../repositorys/share.query.js";

export async function SharePublish(req,res){
    const { url, text } = req.body;
    const { userId } = res.locals;

    try{
        postMyShare(userId,url,text)
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err.message);
    }
    
}