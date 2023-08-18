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

export function getPostByTrendDB(id) {
    return db.query(`
    SELECT posts.id FROM posttrend JOIN posts ON posts.id=posttrend."postId" WHERE "trendId" = $1;
    `, [id]);
}

export function getPostsInfoDB(postsId){
    let listId = [];
    let query = `
        SELECT posts.id, users.username, posts.post, COUNT(likes."postId") AS num_likes,
        json_build_object('trends',array_agg(trends.trend)) AS trends_array, users.picture,
        posts."articleUrl" FROM posts LEFT JOIN likes ON likes."postId" = posts.id LEFT JOIN
        posttrend ON posts.id = posttrend."postId" LEFT JOIN trends ON posttrend."trendId" = trends.id
        JOIN users ON posts."userId" = users.id 
    `
    for (let i=0; i<postsId.length; i++) {
        listId.push(postsId[i].id);
        if (i==0){
            query += `WHERE posts.id=$${i+1}`;
        } else{
            query += ` OR posts.id=$${i+1}`
        }
    }
    query += `
        GROUP BY posts.id, users.username, posts.post,
        posts."articleUrl", users.picture;
    `
    return db.query(query, listId);
}