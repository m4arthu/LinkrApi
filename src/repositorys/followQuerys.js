import { db } from '../database/database.connection.js'

export async function checkIfFollowing(followerId, followedUserId) {
  try {
    const result = await db.query(
      ' SELECT EXISTS (SELECT 1 FROM "followerRelationships" WHERE "followerId" = $1 AND "followedUserId" = $2)',
      [followerId, followedUserId]
    )
    return result.rows[0].exists
  } catch (err) {
    console.error('Erro ao checar o relacionamento de seguidores:', error.data)
    throw error
  }
}
