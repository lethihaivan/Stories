import Author from './author.model'
import Story from '../story/story.model'
import { pagination } from '../../helpers/api'
import { populate } from '../story/story.constants'

const create = async ({ body }, res) => {
  const { fullName } = body
  Author.create({ fullName })
    .then(newAuthor => res.status(200).json(newAuthor))
    .catch(err => res.status(400).json(err))
}

const index = async (req, res) => {
  Author.find({})
    .then(authors => res.status(200).json(authors))
    .catch(err => res.status(400).json(err))
}

const updateInfo = async ({ params, body }, res) => {
  const { id } = params
  const { fullName } = body
  // console.log(id, fullName)
  Author.findByIdAndUpdate(id, { fullName }, { new: true, useFindAndModify: false })
    .then(author => res.status(200).json(author))
    .catch(err => res.status(404).json(err))
}

const storiesOfAuthor = async ({ querymen: { query, select, cursor }, params }, res) => {
  query.author = params.id
  console.log(query, select, cursor, params)
  Story.find(query, select, cursor).populate(populate)
    .then(async data => {
      const total = await Story.countDocuments(query).exec()
      res.status(200).json({ data, total })
    })
    .catch(err => res.status(400).json(err))
}

export { create, updateInfo, storiesOfAuthor, index }