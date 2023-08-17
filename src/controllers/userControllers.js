import { searchUserDB } from "../repositorys/userQuerys.js";

export async function searchUser(req, res) {
    const { text } = req.params;
    try {
        const users = await searchUserDB(text);
        res.send(users.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}