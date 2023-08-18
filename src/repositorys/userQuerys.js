import { db } from "../database/database.connection.js";

export function searchUserDB(text){
    return db.query(`
        SELECT id, username, picture FROM users WHERE username LIKE $1 ORDER BY username
    `, [`%${text}%`]);
}

export function searchUserByIdDB(id){
    return db.query(`
        SELECT username FROM users WHERE id=$1
        `, [id]);
}