import { findSessionDB } from "../repositorys/authQuerys.js";
import { getPostByUserIdDB, getHashtagDB, getPostByTrendDB, getPostsInfoDB, postMyShare, selectallshare, updatePostByIdDB, getPostByIdDB, postHashtag, deletePostByIdDB } from "../repositorys/share.query.js";
import { searchUserByIdDB } from "../repositorys/userQuerys.js";

export async function SharePublish(req, res) {
    const { url, text, trends } = req.body;
    const { userId } = res.locals;
    const alteracao = text.split(' ');

    /*for (let i = 0;i<alteracao.length;i++){
        if (alteracao[i].indexOf("#")!==-1){
            trends.push(alteracao[i])
            continue
        }
    }
    */
    try {
        const postId = (await postMyShare(userId, url, text)).rows[0]
        console.log(trends,trends.length)
        if (trends.length > 0) {
            await postHashtag(trends, postId.id);
        }
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function GetPublish(req, res) {

    try {
        const litas = (await selectallshare()).rows
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
    const { newPost } = req.body;
    const { authorization } = req.headers;

    const token = authorization.slice(7);
    try {
        const { userId } = (await findSessionDB(token)).rows[0]
        if (!userId) return res.status(404).send('user is not logged')

        const post = (await getPostByIdDB(id)).rows[0]

        if (post.userId !== userId) return res.sendStatus(401)

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