import { findSessionDB } from "../repositorys/authQuerys.js";
import { getPostByUserIdDB, getHashtagDB, getPostByTrendDB, getPostsInfoDB, postMyShare, selectallshare, updatePostByIdDB, getPostByIdDB, postHashtag, deletePostByIdDB, updateHashtag, searchPosttrend, deletePosttrend, tempost, repostMyShare } from "../repositorys/share.query.js";
import { searchUserByIdDB } from "../repositorys/userQuerys.js";

export async function SharePublish(req, res) {
    const { url, text, trends } = req.body;
    const { userId } = res.locals;
   
    try {
        const postId = (await postMyShare(userId, url, text)).rows[0]
        console.log(trends, trends.length)
        if (trends.length > 0) {
            await postHashtag(trends, postId.id);
        }
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function ShareRepost(req,res){
    const { userId } = res.locals;
    const {id} = req.params
   
    try {
        const postId = (await repostMyShare(userId,id))

        if (postId===0) return res.sendStatus(404)
        
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function GetPublish(req, res) {
    const { userId } = res.locals;

    try {
        const litas = (await selectallshare(userId))
        res.status(200).send(litas);

    } catch (err) {
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

        const { username } = (await searchUserByIdDB(id)).rows[0];
        if (!username) return res.status(404).send(`usuário com o ${id} não existe`)
        res.send({ username, posts: postsInfo.rows });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function updatePostById(req, res) {
    const { id } = req.params;
    const { newPost, trends } = req.body;
    const { authorization } = req.headers;
    const token = authorization.slice(7);
    const registeredTrends = []
    const removedTrends = []
    try {
        const { userId } = (await findSessionDB(token)).rows[0] || ''

        if (!userId) return res.status(404).send('user is not logged')

        const postRegistered = (await getPostByIdDB(id)).rows[0]

        if (postRegistered.userId !== userId) return res.sendStatus(401)


        const post = (await searchPosttrend(id)).rows
        post.map(x => {
            registeredTrends.push(x.trends)
        })
        registeredTrends.map(x => {
            trends.indexOf(x.trend) > -1 ? trends.splice(trends.indexOf(x.trend), 1) : removedTrends.push(x.id)
        })


        await deletePosttrend(removedTrends, id)
        console.log(trends)
        console.log(removedTrends)
        await updateHashtag(trends, id)
        await updatePostByIdDB(newPost, id)

        res.sendStatus(200)
    }
    catch {
        res.sendStatus(500)
    }
}

export async function deletePostById(req, res) {
    const { id } = req.params;
    const { authorization } = req.headers;

    const token = authorization.slice(7);
    try {
        const { userId } = (await findSessionDB(token)).rows[0]
        if (!userId) return res.status(404).send('user is not logged')

        const post = (await getPostByIdDB(id)).rows[0]

        if (post.userId !== userId) return res.sendStatus(401)

        await deletePostByIdDB(id)

        res.sendStatus(204)
    }
    catch {
        res.sendStatus(500)
    }
}