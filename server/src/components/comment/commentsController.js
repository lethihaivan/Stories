const Comment = require('./commentsModel')
const { populate } = require('./constants')

const create = async (req, res) => {
  const { author, content, parentId, storyId, } = req.body

  const data = { author, content, storyId, parentId }

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
}

const remove = async (req, res) => {
  const data = await Comment.findOneAndRemove(req.params.id)
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ test: 'Comment not found!!!' })
  }
}

const removeAll = async (req, res) => {
  Comment.remove({}).then(data => res.status(200).json(data))
}

module.exports = { create, index, remove, removeAll }