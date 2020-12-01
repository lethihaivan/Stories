import Rating from './rating.model'

const create = async ({ body, user }, res) => {
  const { point, storyId } = body
  console.log(user, point, storyId)
  Rating.create({ point, storyId, ratingBy: user.id })
    .then(newRating => res.status(200).json(newRating))
    .catch(err => res.status(400).json(err))
}

export { create }