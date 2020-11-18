const Rating = require('./ratingsModel')

const create = async (req, res) => {
  // const { name, index, content } = req.body

  Rating.create({ ...req.body })
    .then(newRating => res.status(200).json(newRating))
    .catch(err => res.status(400).json(err))
}

module.exports = { create }