import Comment from './comment.model'
const { populate } = require('./comment.constants')

const create = async ({ body, user }, res) => {
  const { content, parentId, storyId: story, } = body
  const data = { content, story, parentId, author: user.id, }

  Comment.create(data)
    .then(async (newComment) => {
      if (parentId) {
        const commentParent = await Comment.findById(parentId)
        commentParent.commentChildren.push(newComment._id)
        commentParent.save()
      }
      return newComment.populateComment()
    })
    .then(newComment => res.status(201).json(newComment))
    .catch(err => res.status(400).json(err))
}

const index = async (req, res) => {
  Comment.find({ commentParent: null, }).populate(populate)
    // .then(comments => comments.populate())
    .then(comments => {
      // console.log(comments)
      res.status(200).json(comments)
    })
    .catch(err => res.status(400).json(err))
}

const getById = async ({ params }, res) => {
  Comment.findById(params.id)
    .then(async comments => res.status(200).json(await comments.populateComment()))
    .catch(err => res.status(400).json(err))
}


const remove = async ({ params, user, body }, res) => {
  // const comment = await Comment.findOneAndRemove({ _id: params.id })
  const comment = await Comment.findById(params.id)

  if (!comment) return res.status(404).json({ message: "Comment not found" })
  if (comment.author.toString() !== user._id.toString()) return res.status(404).json({ message: "You can't delete this comment" })

  comment.remove()
  res.status(200).json({ comment, message: "Delete success" })
}

const removeAll = async (req, res) => {
  Comment.remove({}).then(data => res.status(200).json(data))
}

export { create, index, remove, removeAll, getById }