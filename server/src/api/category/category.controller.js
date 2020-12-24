import Category from './category.model'
import Story from '../story/story.model'
import { LIMIT_EACH_PAGE } from '../../constants'

const index = async (req, res) => {
  try {
    const { page, limit, sort } = req.query
    const filter = {}
    const total = await Category.countDocuments(filter)
    const data = await Category
      .find(filter)
      .skip(((page || 1) - 1) * +limit)
      .limit(+limit || LIMIT_EACH_PAGE)
      .sort(sort || 'title')

    res.status(200).json({
      data,
      total,
      currentPage: +page,
      numberOfResult: data.length
    })
  } catch (err) {
    res.status(400).json(err)
  }
}

const create = async (req, res) => {
  Category.create({ ...req.body })
    .then(newCategory => res.status(200).json(newCategory))
    .catch(err => res.status(400).json(err))
}

const update = async ({ params, body }, res) => {
  const { id } = params
  const { title } = body
  Category.findByIdAndUpdate(id, { title }, { new: true })
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json(err))
}

const storiesOfCategory = async ({ querymen: { query, select, cursor }, params }, res) => {
  query.categories = params.id
  Story.find(query, select, cursor).populate(populate)
    .then(async data => {
      const total = await Story.countDocuments(query).exec()
      res.status(200).json({ data, total })
    })
    .catch(err => res.status(400).json(err))
}

export { create, index, update, storiesOfCategory }