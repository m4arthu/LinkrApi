import { db } from "../database/database.connection.js";

export function postMyShare(userId,url,text){
    return db.query(`INSERT INTO posts("userId","articleUrl",post) VALUES ($1,$2,$3) RETURNING id;`, [userId,url,text]);
}

export async function postHashtag(trend, postId){
    let qty = trend ? '($1)' : ''
    for(let i=2; i<=trend.length ; i++){
        qty += `,($${i})`
    }
  
    const trendIdArray = (await db.query(`INSERT INTO trends (trend) VALUES ${qty} ON CONFLICT (trend) DO UPDATE SET trend=EXCLUDED.trend RETURNING id;`,trend)).rows;
    const idArray = []
    trendIdArray.map(x => {
        idArray.push(x.id)
    }) 
    let qtyPT = qty ? `($1, ${postId})` : ''
    for(let i=2; i<=trend.length ; i++){
        qtyPT += `,($${i}, ${postId})`
    }
    return db.query(`INSERT INTO posttrend ("trendId","postId") VALUES ${qtyPT};`, idArray);
}

export function tempost(){
    return db.query(`SELECT * FROM posts`)
}

export async function selectallshare(userId){
    const lista = await db.query(`SELECT posts.*, users.username,users.picture, COUNT(likes."postId") AS num_likes
    FROM posts 
	JOIN "followerRelationships" ON posts."userId"="followerRelationships"."followedUserId" 
	LEFT JOIN likes ON likes."postId" = posts.id 
    JOIN users ON posts."userId" = users.id
	WHERE "followerRelationships"."followerId"=$1
    GROUP BY posts.id, users.username, posts.post,
    posts."articleUrl", users.picture
    ORDER BY "createdAt" DESC LIMIT 20;`,[userId ])

    if ((lista.rowCount)>0){
        return lista.rows
    }

    if ((await db.query('SELECT * FROM posts')).rowCount===0){
        return 'There are no posts yet'
    }

    const segue = (await db.query(`SELECT * FROM "followerRelationships" WHERE "followerId"=$1;`,[userId])).rows.length
    if ( segue === 0){
        return "You don't follow anyone yet. Search for new friends!"
    }
    else{
        return "No posts found from your friends"
    }

}

export function getHashtagDB() {
    return db.query(`SELECT id, trend FROM trends ORDER BY trend;`);
}

export function getPostByTrendDB(id) {
    return db.query(`
    SELECT posts.id FROM posttrend JOIN posts ON posts.id=posttrend."postId" WHERE "trendId" = $1;
    `, [id]);
}

export function getPostByUserIdDB(id) {
    return db.query(`
        SELECT posts.id, users.username, posts."userId", posts.post, COUNT(likes."postId") AS num_likes,
        json_build_object('trends',array_agg(trends.trend)) AS trends_array, users.picture,
        posts."articleUrl" FROM posts LEFT JOIN likes ON likes."postId" = posts.id LEFT JOIN
        posttrend ON posts.id = posttrend."postId" LEFT JOIN trends ON posttrend."trendId" = trends.id
        JOIN users ON posts."userId" = users.id 
        WHERE users.id = $1
        GROUP BY posts.id, users.username, posts.post, posts."userId",
        posts."articleUrl", users.picture;
    `, [id])
}

export function getPostsInfoDB(postsId){
    console.log(postsId);
    let listId = [];
    let query = `
        SELECT posts.id, users.username, posts.post, COUNT(likes."postId") AS num_likes, users.picture,
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

export function updatePostByIdDB(newPost, postId){
    return db.query(`UPDATE posts SET post=$1 WHERE id=$2;`, [newPost, postId])
}

export function getPostByIdDB(postId){
    return db.query(`SELECT * FROM posts WHERE id=$1`, [postId])
}

export function deletePostByIdDB(id){
    return db.query(`DELETE FROM posts WHERE id=$1`, [id])
}
export async function updateHashtag(trend, postId){
    if (trend.length > 0){
        let qty = trend ? '($1)' : ''
        for(let i=2; i<=trend.length ; i++){
            qty += `,($${i})`
        }
    
        const trendIdArray = (await db.query(`INSERT INTO trends (trend) VALUES ${qty} ON CONFLICT (trend) DO UPDATE SET trend=EXCLUDED.trend RETURNING id;`,trend)).rows;
        const idArray = []
        trendIdArray.map(x => {
            idArray.push(x.id)
        }) 
        let qtyPT = qty ? `($1, ${postId})` : ''
        for(let i=2; i<=trend.length ; i++){
            qtyPT += `,($${i}, ${postId})`
        }
        return db.query(`INSERT INTO posttrend ("trendId","postId") VALUES ${qtyPT};`, idArray);
    }
}
export async function searchPosttrend(postId){
    return db.query(`
        SELECT json_build_object('id', trends.id, 'trend', trends.trend) as trends FROM posttrend
        LEFT JOIN trends ON posttrend."trendId" = trends.id
        WHERE posttrend."postId" = ${postId}
        GROUP BY trends.id
    ;`)
}
export async function deletePosttrend(removedTrends, postId){
    if(removedTrends.length > 0) {
        let qty = removedTrends.length ? '("trendId"=$1)' : ''
        for(let i=2; i<=removedTrends.length ; i++){
        qty += `OR ("trendId"=$${i})`
    }
console.log(`DELETE FROM posttrend WHERE ${qty} AND "postId"=${postId};`)
    return db.query(`DELETE FROM posttrend WHERE ${qty} AND "postId"=${postId};`, removedTrends)
    }
    else{
        return []
    }    
}