const Chapter = require('./chaptersModel')

const create = async (req, res) => {
  // const { name, index, content } = req.body

  Chapter.create({ ...req.body })
    .then(newChapter => res.status(200).json(newChapter))
    .catch(err => res.status(400).json(err))
}

module.exports = { create }