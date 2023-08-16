import { db } from "../database/database.connection.js";

export const registerQuery = `INSERT INTO users(email,username,password,"picture")
 values ($1,$2,$3,$4)`

 export const  getUserDataQuery = "SELECT * from users WHERE email = $1"

 export const getSessionExistQuery = `select * from sessions WHERE "userId" = $1`

 export const loginQuery = `insert into sessions(token,"userId") values ($1,$2)`

export function findSessionDB(token) {
    return db.query(`SELECT * FROM sessions WHERE token=$1;`, [token]);
}

export function deleteSessionDB(userId){
    return db.query(`DELETE FROM sessions WHERE "userId"=$1`, [userId]);
}