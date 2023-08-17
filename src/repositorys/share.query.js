import { db } from "../database/database.connection.js";

export function postMyShare(userId,url,text){
    return db.query(`INSERT INTO posts("userId","articleUrl",post) VALUES ($1,$2,$3);`, [userId,url,text]);
}