import { getLikedPosts, togglePostLike } from '../repositorys/likeQuerys.js'

export async function likedByUsers(req, res) {
  try {
    const posts = await getLikedPosts()
    res.status(200).send(posts)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function postLike(req, res) {
  const { userId } = res.locals
  const { postId } = req.body

  try {
    const message = await togglePostLike(userId, postId)
    res.status(200).send(message)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function postLikeByParams(req, res) {
  const { userId } = res.locals
  const { postId } = req.params

  try {
    const message = await togglePostLike(userId, postId)
    res.status(200).send(message)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
