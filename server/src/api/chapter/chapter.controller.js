import Chapter from './chapter.model'
import Story from '../story/story.model'
import { pagination } from '../../helpers/api'

const create = async ({ body }, res) => {
  try {
    const { name, index, content, storyId } = body

    const chapters = await Chapter.find({ storyId })
    const hasIndexOfChapter = chapters.findIndex(chapter => chapter.index === index)
    if (~hasIndexOfChapter) return res.status(401).json({ message: 'Index of chapter is existed' })

    const chapter = await Chapter.create({ name, index, content, storyId })
    const story = await Story.findById(storyId)
    story.chapters.push(chapter._id)
    story.save()

    res.status(200).json(chapter)
  } catch (err) {
    res.status(400).json(err)
  }
}

const getById = async ({ params }, res) => {
  Chapter.findById(params.id)
    .then(chapter => res.status(200).json(chapter))
    .catch(err => res.status(400).json(err))
}

const index = async ({ query }, res) => {
  try {
    const filter = {}
    const total = await Chapter.countDocuments(filter)
    const data = Chapter.find(filter)
    const chapters = await pagination(data, query)

    res.status(200).json({ ...chapters, total })
  } catch (err) {
    res.status(400).json(err)
  }
}

const update = async ({ params, body }, res) => {
  const { id } = params

  Chapter.findByIdAndUpdate(id, body, { new: true, })
    .then(chapter => res.status(200).json(chapter))
    .catch(err => res.status(404).json(err))
}

export { create, getById, index, update }