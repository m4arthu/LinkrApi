import { db } from '../database/database.connection.js'

export async function getLikedPosts() {
  try {
    const query = `SELECT
      posts.id,
      posts."userId",
      COALESCE(COUNT(likes."postId"), 0)::integer AS likes,
      COALESCE(STRING_AGG(users.username, ','), '') AS "likedByNames"
    FROM posts
    LEFT JOIN likes ON posts.id = likes."postId"
    LEFT JOIN users ON likes."userId" = users.id
    GROUP BY posts.id
    ORDER BY posts."createdAt" DESC;
    `

    const result = await db.query(query)
    return result.rows
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function getPostByIdFromDB(postId) {
  try {
    const query = `
      SELECT
        posts.id,
        posts."userId",
        COALESCE(COUNT(likes."postId"), 0)::integer AS likes,
        COALESCE(STRING_AGG(users.username, ','), '') AS "likedByNames"
      FROM posts
      LEFT JOIN likes ON posts.id = likes."postId"
      LEFT JOIN users ON likes."userId" = users.id
      WHERE posts.id = $1
      GROUP BY posts.id;
    `

    const result = await db.query(query, [postId])
    return result.rows[0]
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function togglePostLike(userId, postId) {
  try {
    const userAlreadyLiked = await db.query(
      `SELECT COUNT(*) FROM likes WHERE "userId" = $1 AND "postId" = $2`,
      [userId, postId]
    )

    const hasLike = userAlreadyLiked.rows[0].count > 0

    if (hasLike) {
      const deleteQuery =
        'DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2'
      await db.query(deleteQuery, [userId, postId])
      return 'Like removed'
    } else {
      const insertQuery =
        'INSERT INTO likes ("userId", "postId") VALUES ($1, $2)'
      await db.query(insertQuery, [userId, postId])
      return 'Like added'
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export function getUsersLikedDB(id){
  return db.query(`
    SELECT likes."userId", users.username FROM likes 
    JOIN users ON users.id=likes."userId" WHERE "postId"=$1
  `, [id]);
}