const Story = require('./storiesModel')
const { populate } = require('./constants')

const create = async ({ body }, res) => {
  // const { name, index, content } = req.body
  const { name, description, status, categories, author, chapters } = { ...body }
  const data = { name, description, status, categories, author, chapters }
  Story.create({ ...data })
    .then(story => story.populateStory())
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json(err))
}

const index = async ({ params }, res) => {
  Story.find({}).populate(populate).then(stories => res.status(200).json(stories))
}

module.exports = { create, index }