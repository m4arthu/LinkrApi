import { db } from '../database/database.connection.js'

export async function checkIfFollowing(followerId, followedUserId) {
  try {
    const result = await db.query(
      ' SELECT EXISTS (SELECT 1 FROM "followerRelationships" WHERE "followerId" = $1 AND "followedUserId" = $2)',
      [followerId, followedUserId]
    )
    return result.rows[0].exists
  } catch (error) {
    console.error('Erro ao checar o relacionamento de seguidores:', error.data)
    throw error
  }
}

export async function followUser(followerId, followedUserId) {
  try {
    const queryResult = await db.query(
      `INSERT INTO "followerRelationships" ("followerId", "followedUserId") VALUES ($1, $2)`,
      [followerId, followedUserId]
    )
    return queryResult
  } catch (error) {
    throw new Error('Erro ao seguir o usuário.')
  }
}

export async function unfollowUser(followerId, followedUserId) {
  try {
    const queryResult = await db.query(
      'DELETE FROM "followerRelationships" WHERE "followerId" = $1 AND "followedUserId" = $2',
      [followerId, followedUserId]
    )
    return queryResult
  } catch (error) {
    throw new Error('Erro ao deixar de seguir o usuário.')
  }
}
