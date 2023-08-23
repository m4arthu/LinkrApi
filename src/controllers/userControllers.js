import { searchUserDB } from "../repositorys/userQuerys.js";

export async function searchUser(req, res) {
    const { userId } = res.locals
    const { text } = req.params;
    try {
        const users = await searchUserDB(userId,text);
        const norep = []
        const userIdSet = new Set(); // Usado para verificar duplicatas
        users.rows.forEach(user => {
            if (!userIdSet.has(user.id)) {
            userIdSet.add(user.id); // Adicione o ID do usuário ao conjunto
            norep.push(user); // Adicione o objeto de usuário ao array norep
        }
        });
        res.send(norep);
    } catch (error) {
        res.status(500).send(error.message);
    }
}