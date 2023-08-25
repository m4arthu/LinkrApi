import { db } from "../database/database.connection.js";

export function postComment(userId, postId, comment){
    return db.query(`
        INSERT INTO comments ("userId", "postId", comment)
        VALUES ($1, $2, $3);
    `, [userId, postId, comment])
}

export function getCommentsDB(id){
    return db.query(`
        SELECT users.username, users.picture, comments.id, comments."userId", comments.comment, comments."userId" = posts."userId" AS owner
        FROM comments 
        JOIN posts ON posts.id = comments."postId"
        JOIN users ON comments."userId" = users.id
        WHERE posts.id = $1
        ORDER BY posts."createdAt"
        ;
    `, [id])
}