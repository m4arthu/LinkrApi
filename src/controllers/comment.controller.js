import { getCommentsDB, postComment } from "../repositorys/comment.query.js"
import { searchUserByTokenDB } from "../repositorys/userQuerys.js"

export const addComment = async (req, res) => {
    const {id} = req.params
    const {authorization} = req.headers
    const {comment} = req.body
    const token = authorization.slice(7)
    try{
        const userRegistered = (await searchUserByTokenDB(token)).rows[0]

        if (!userRegistered.id) return res.sendStatus(401)

        await postComment(userRegistered.id, id, comment)


        res.sendStatus(201)
    }
    catch{
        res.sendStatus(500)
    }
}

export const getComments = async (req, res) => {
    const {id} = req.params;
    const {authorization} = req.headers;
    const token = authorization.slice(7);

    try{
        const userRegistered = (await searchUserByTokenDB(token)).rows[0]

        if (!userRegistered.id) return res.sendStatus(401)

        const commentsArray = (await getCommentsDB(id)).rows
        res.send(commentsArray)
    }
    catch{
        res.sendStatus(500)
    }
}