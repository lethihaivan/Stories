import User from './user.model'
import Story from '../story/story.model'
import Comment from '../comment/comment.model'
import { populate } from '../comment/comment.constants'

const index = async (req, res) => {
  User.find({}).populate('favoriteStories')
    .then(users => res.status(200).json(users))
    .catch(err => res.status(403).json(err))
}

const updateInfo = async ({ params, body }, res) => {
  const { id } = params
  const { fullName, avatarUrl } = body
  User.findByIdAndUpdate(id, { fullName, avatarUrl }, { new: true, useFindAndModify: false })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(404).json(err))
}

const reactStory = async ({ body: { storyId }, user }, res) => {
  try {
    const storyIndex = user.favoriteStories.indexOf(storyId)
    // const _user = await User.findByIdAndUpdate(user._id, { $push: { favoriteStories: storyId } })
    // console.log(_user)
    if (!~storyIndex) {
      user.favoriteStories.push(storyId)
    } else {
      user.favoriteStories.splice(storyIndex, 1)
    }
    user.save()
    const _user = await User.findById(user._id).populate('favoriteStories')
    res.status(200).json(_user)
  } catch (err) {
    res.status(400).json(err)
  }
}

const storiesFavoriteOfUser = async ({ querymen: { query, select, cursor }, user }, res) => {
  try {
    query._id = { $in: user.favoriteStories }
    const data = await Story.find(query, select, cursor)
    const total = await Story.countDocuments(query).exec()
    res.status(200).json({ data, total })
  } catch (err) {
    res.status(400).json(err)
  }
}

const commentsOfUser = async ({ user }, res) => {
  Comment.find({ commentParent: null, author: user.id }).populate(populate)
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(400).json(err))
}

export { index, updateInfo, reactStory, storiesFavoriteOfUser, commentsOfUser }