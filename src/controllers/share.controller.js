import { getPostByUserIdDB, getHashtagDB, getPostByTrendDB, getPostsInfoDB, postMyShare, selectallshare, postHashtag } from "../repositorys/share.query.js";
import { searchUserByIdDB } from "../repositorys/userQuerys.js";

export async function SharePublish(req,res){
    const { url, text } = req.body;
    const { userId } = res.locals;
    const trends = []
    const alteracao = text.split(' ');

    for (let i = 0;i<alteracao.length;i++){
        if (alteracao[i].indexOf("#")!==-1){
            trends.push(alteracao[i])
            continue
        }
    }

    try{
        postMyShare(userId,url,text)
        for (let j= 0;j<trends.length;j++){
            await postHashtag(trends[j]);
        }
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
        if (postsId.rows.length == 0) return res.send([]);
        const postsInfo = await getPostsInfoDB(postsId.rows)
        res.send(postsInfo.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPostByUserId(req, res) {
    const { id } = req.params;
    try {
         const postsInfo = await getPostByUserIdDB(id);

         const {username} = (await searchUserByIdDB(id)).rows[0];
         console.log(username)
         if (!username) return res.status(404).send(`usuário com o ${id} não existe`)
        res.send({username , posts: postsInfo.rows});
    } catch (error) {
        res.status(500).send(error.message);
    }
}