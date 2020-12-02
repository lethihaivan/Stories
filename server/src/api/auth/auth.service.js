import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { MIN_PASSWORD, MAX_PASSWORD, TIME } from '../../constants'

const validateRegister = (data) => {
  const errors = {}
  const { fullName, username, password, password2 } = data;

  if (!fullName) errors.fullName = 'Full name field is required.'

  if (!username) errors.username = 'Username field is required.'

  if (!password) {
    errors.password = 'Password field is required.'
  }
  else {
    const isEnoughLength = validator.isLength(password, {
      min: MIN_PASSWORD,
      max: MAX_PASSWORD,
    });
    if (!isEnoughLength) {
      errors.password = `Password need at least ${MIN_PASSWORD} character and less than ${MAX_PASSWORD} character`
    }
  }

  if (!password2 || !validator.equals(password, password2)) {
    errors.password2 = 'Confirm password is not match.'
  }

  return errors
}

const validationLogin = (data) => {
  const errors = {}
  const { username, password } = data

  if (!username) errors.username = 'Username field is required.'

  if (!password) errors.password = 'Password field is required.'

  return errors
}

const hashPassword = async (password) => {
  const saltRounds = 10
  try {
    const salt = await bcryptjs.genSalt(saltRounds)
    const hashed = await bcryptjs.hash(password, salt)
    return hashed
  } catch (err) {
    throw new Error(err)
  }
}

const generateToken = async (payload, expiresIn = TIME.WEEK) => {
  try {
    const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn, })
    return token
  } catch (error) {
    throw new Error(error)
  }
}

export { validateRegister, hashPassword, validationLogin, generateToken }