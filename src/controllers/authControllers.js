import { db } from "../database/database.connection.js"
import {
    registerQuery,
    getUserDataQuery,
    getSessionExistQuery,
    loginQuery
} from "../repositorys/authQuerys.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export const RegisterController = async (req, res) => {
    const { email, name, password, pictureUrl } = req.body
    let passwordEncrypited = await bcrypt.hash(password, 10)
    try {
        await db.query(registerQuery, [email, name, passwordEncrypited, pictureUrl])
        res.sendStatus(201);
    } catch (e) {
        if (e.code = 23505) {
            res.status(409).send("Email ja  esta em uso !!")
        }
        console.log(e)
        res.status(500).send(e.message)
    }
}

export const LoginController = async (req, res) => {
    const { email, password } = req.body
    try {
        const userData = await db.query(getUserDataQuery, [email])
        if (userData.rowCount === 0) {
            res.status(404).send("email  não  existe!!")
            return
        }
        let userId = userData.rows[0].id
        if (!await bcrypt.compare(password, userData.rows[0].password)) {
            res.status(401).send("senha incorreta!!")
            return
        }
        const sessionExist = await db.query(getSessionExistQuery, [userId])
        delete userData.rows[0].password
        delete userData.rows[0].email
        if (sessionExist.rowCount > 0) {
            res.send({token:sessionExist.rows[0].token,userData:userData.rows[0]})
            return
        }
        let token = uuid(userId)
        await db.query(loginQuery, [token,userId])
        res.send({ token,userData:userData.rows[0]})
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
}