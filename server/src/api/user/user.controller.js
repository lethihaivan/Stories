import User from './user.model'

const index = async (req, res) => {
  User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(403).json(err))
}

const updateInfo = async ({ params, body }, res) => {
  const { id } = params
  const { fullName } = body
  // console.log(id, fullName)
  User.findByIdAndUpdate(id, { fullName }, { new: true, useFindAndModify: false })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(404).json(err))
}

export { index, updateInfo }