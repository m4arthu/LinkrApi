import { db } from "../database/database.connection.js";

export function postMyShare(userId,url,text){
    return db.query(`INSERT INTO posts("userId","articleUrl",post) VALUES ($1,$2,$3);`, [userId,url,text]);
}

export function selectallshare(){
    return db.query(`SELECT posts.*,users.username,users.picture FROM posts 
    JOIN users ON posts."userId" = users.id ORDER BY "createdAt" DESC LIMIT 20;`)
}

export function getHashtagDB() {
    return db.query(`SELECT id, trend FROM trends ORDER BY trend;`);
}