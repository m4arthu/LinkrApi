import { getHashtagDB, getPostByTrendDB, getPostsInfoDB, postMyShare, selectallshare } from "../repositorys/share.query.js";

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

export async function GetPublish(req,res){
    try{
        const litas = (await selectallshare()).rows
        res.status(200).send(litas);
    }catch(err){
        res.status(500).send(err.message);
    }
    
}

export async function getHashtag(req, res) {
    try {
        const hashtags = await getHashtagDB();
        res.send(hashtags.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPostByTrend(req, res) {
    const { id } = req.params;
    try {
        const postsId = await getPostByTrendDB(id);
        const postsInfo = await getPostsInfoDB(postsId.rows)

        res.send(postsInfo.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}