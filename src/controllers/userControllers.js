import { searchUserDB } from "../repositorys/userQuerys.js";

export async function searchUser(req, res) {
    const { userId } = res.locals
    const { text } = req.params;
    try {
        const users = await searchUserDB(userId,text);
        const filterUsers = []
        const userIdSet = new Set();
        users.rows.forEach(user => {
            if (!userIdSet.has(user.id)) {
            userIdSet.add(user.id);
            filterUsers.push(user);
        }
        });
        res.send(filterUsers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}