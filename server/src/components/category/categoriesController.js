const Category = require('./categoriesModel')

const create = async (req, res) => {
  // const { name, index, content } = req.body

  Category.create({ ...req.body })
    .then(newCategory => res.status(200).json(newCategory))
    .catch(err => res.status(400).json(err))
}

const index = async (req, res) => {
  Category.find({}).then(categories =>  res.status(200).json(categories))
}
module.exports = { create, index }