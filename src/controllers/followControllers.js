import { checkIfFollowing } from '../repositorys/followQuerys.js'

export default async function checkFollowing(req, res) {
  const loggedInUserId = parseInt(req.query.loggedInUserId)
  const profileUserId = parseInt(req.query.profileUserId)

  console.log(loggedInUserId, profileUserId)

  const isFollowing = await checkIfFollowing(loggedInUserId, profileUserId)

  console.log(isFollowing)

  res.json({ following: isFollowing })
}
