import Story from './story.model'
import { populate } from './story.constants'
import { pagination } from '../../helpers/api'

const create = async ({ body, file }, res) => {
  const { name, description, status, categories, author, createdBy, chapters, image } = { ...body }
  const data = { name, description, status, categories, createdBy, author, chapters, image }
  Story.create({ ...data })
    .then(story => story.populateStory())
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json(err))
}


const index = async ({ query }, res) => {
  try {
    const filter = {}
    const total = await Story.countDocuments(filter)
    const data = Story.find(filter).populate(populate)
    const stories = await pagination(data, query)

    res.status(200).json({ ...stories, total })
  } catch (err) {
    res.status(400).json(err)
  }
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

export { create, index, getById }