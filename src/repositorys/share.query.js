import { db } from "../database/database.connection.js";

export function postMyShare(userId,url,text){
    const response = db.query(`INSERT INTO posts("userId","articleUrl",post) VALUES ($1,$2,$3);`, [userId,url,text])
    return {data: response,tamanho:response.rowcount };
}



export function selectallshare(){
    return db.query(`SELECT posts.*,users.username,users.picture FROM posts 
    JOIN users ON posts."userId" = users.id ORDER BY "createdAt" DESC LIMIT 20;`)
}