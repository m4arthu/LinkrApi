import {
  checkIfFollowing,
  followUser,
  getFollowingDB,
  unfollowUser
} from '../repositorys/followQuerys.js'

export async function checkFollowing(req, res) {
  // const loggedInUserId = parseInt(req.query.loggedInUserId)
  const { userId } = res.locals
  const followedId = parseInt(req.query.followedId)

  try{
    const isFollowing = await checkIfFollowing(userId, followedId)

    res.json({ following: isFollowing })
  } 
  catch{
    res.sendStatus(500)
  }
}

export async function followUnfollow(req, res) {
  const { followedUserId } = req.body
  const followerId = res.locals.userId

  try {
    const isFollowing = await checkIfFollowing(followerId, followedUserId)

    if (isFollowing) {
      await unfollowUser(followerId, followedUserId)
      res.json({ message: 'Você deixou de seguir o usuário.' })
    } else {
      await followUser(followerId, followedUserId)
      res.status(201).json({ message: 'Você começou a seguir o usuário.' })
    }
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: 'Ocorreu um erro ao seguir/deixar de seguir o usuário.' })
  }
}

export async function getFollowing (req, res) {
  const { userId } = res.locals;
  try{
    const followingArray = (await getFollowingDB(userId)).rows

    res.send(followingArray)
  }
  catch{
    res.sendStatus(500)
  }
}