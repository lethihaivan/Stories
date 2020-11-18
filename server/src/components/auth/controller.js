const bcryptjs = require('bcryptjs');

const User = require('../user/model')
const { validateRegister, validationLogin, hashPassword, generateToken } = require('./service')

const register = async ({ body }, res) => {
  const errors = validateRegister(body)
  if (!Object.keys(errors)) return res.status(400).json(errors);

  const { username, password } = body
  const user = await User.findOne({ username })
  if (user) {
    return res.status(400).json({ username: 'Username is already exists.' });
  }

  const securePassword = await hashPassword(password)

  const data = { ...body, password: securePassword }
  User.create(data)
    .then(res => {
      console.log(res)
      return res
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json(err))
}

const login = async ({ body }, res) => {
  const errors = validationLogin(body)
  if (Object.keys(errors).length) return res.status(400).json(errors)

  const { username, password } = body

  const user = await User.findOne({ username })

  if (user) {
    const isPasswordCorrect = await bcryptjs.compare(password, user.password)
    if (isPasswordCorrect) {
      const { id, fullName, username } = user
      const payload = { id, fullName, username }
      const token = await generateToken(payload)
      return res.json({ success: true, token });
    }
    return res.status(400).json({ password: 'Password is incorrect.' });
  }
}


module.exports = { register, login }