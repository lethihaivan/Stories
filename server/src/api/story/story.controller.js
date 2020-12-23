import Story from './story.model'
import Chapter from '../chapter/chapter.model'
import { populate } from './story.constants'

const create = async ({ body, user }, res) => {
  const { name, description, status, categories, author, chapters, image } = { ...body }
  const data = { name, description, status, categories, createdBy: user.id, author, chapters, image }
  Story.create({ ...data })
    .then(story => story.populateStory())
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json(err))
}


const index = async ({ querymen: { query, select, cursor } }, res) => {
  Story.find(query, select, cursor).populate(populate)
    .then(async data => {
      const total = await Story.countDocuments(query).exec()
      res.status(200).json({ data, total })
    })
    .catch(err => res.status(400).json(err))
}

const getById = async ({ params }, res) => {
  try {
    const story = await Story.findById(params.id).populate(populate)
    const rating = await story.getRating() || 0
    story.set('rating', rating, { strict: false })
    res.status(200).json(story)
  } catch (err) {
    res.status(400).json(err)
  }
}

const getChaptersOfStory = async ({ querymen: { query, select, cursor }, params }, res) => {
  query.storyId = params.id
  Chapter.find(query, select, cursor).populate(populate)
    .then(async data => {
      const total = await Chapter.countDocuments(query).exec()
      res.status(200).json({ data, total })
    })
    .catch(err => res.status(400).json(err))
}

const update = async ({ params, body }, res) => {
  const { id } = params
  Story.findByIdAndUpdate(id, body, { new: true, })
    .then(chapter => res.status(200).json(chapter))
    .catch(err => res.status(404).json(err))
}


export { create, index, getById, update, getChaptersOfStory }