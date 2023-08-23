import { searchUserDB } from "../repositorys/userQuerys.js";

export async function searchUser(req, res) {
    const { userId } = res.locals
    const { text } = req.params;
    try {
        const users = await searchUserDB(userId,text);
        res.send(users.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}