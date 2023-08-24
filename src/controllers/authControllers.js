import { db } from '../database/database.connection.js'
import {
  registerQuery,
  getUserDataQuery,
  getSessionExistQuery,
  loginQuery,
  deleteSessionDB
} from '../repositorys/authQuerys.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

export const RegisterController = async (req, res) => {
  const { email, name, password, pictureUrl } = req.body
  let passwordEncrypited = await bcrypt.hash(password, 10)
  try {
    await db.query(registerQuery, [email, name, passwordEncrypited, pictureUrl])
    res.sendStatus(201)
  } catch (e) {
    if ((e.code = 23505)) {
      res.status(409).send('Email ja  esta em uso !!')
    }
    console.log(e)
    res.status(500).send(e.message)
  }
}

export const LoginController = async (req, res) => {
  const { email, password } = req.body
  try {
    const userData = await db.query(getUserDataQuery, [email])

    if (userData.rowCount === 0) return res.status(404).send('email  não  existe!!')
    let userId = userData.rows[0].id
    if (!(await bcrypt.compare(password, userData.rows[0].password))) return res.status(401).send('senha incorreta!!')
    console.log(email)

    const sessionExist = await db.query(getSessionExistQuery, [userId])
    delete userData.rows[0].password
    delete userData.rows[0].email
    if (sessionExist.rowCount > 0) return res.send({token: sessionExist.rows[0].token, userData: userData.rows[0]})
   
    let token = uuid(userId)
    await db.query(loginQuery, [token, userId])
    res.send({ token, userData: userData.rows[0] })
  } catch (e) {
    res.status(500).send(e.message)
  }
}

export async function logOut(req, res) {
  const { userId } = res.locals
  try {
    await deleteSessionDB(userId)
    res.sendStatus(204)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
