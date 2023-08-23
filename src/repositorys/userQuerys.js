import { db } from "../database/database.connection.js";

export function searchUserDB(userId,text){
    return db.query(`
    SELECT
    users.id, users.username, users.picture FROM users 
    LEFT JOIN 
        "followerRelationships" 
    ON 
        "followerRelationships"."followedUserId" = users.id WHERE users.id != $1 AND users.username LIKE $2
    ORDER BY 
        CASE WHEN "followerRelationships"."followerId" = $1 THEN 0 ELSE 1 END,
        users.username;
    `, [userId,`%${text}%`]);
}

export function searchUserByIdDB(id){
    return db.query(`
        SELECT username FROM users WHERE id=$1
        `, [id]);
}