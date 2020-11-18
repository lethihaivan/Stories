const mongoose = require('mongoose')

const roles = ['user', 'admin']
const userSchema = mongoose.Schema({
  username: { type: String, require: true, trim: true, unique: true, lowercase: true, },
  fullName: { type: String, require: true },
  password: { type: String, require: true, minLength: 6, maxLength: 30 },
  role: { type: String, enum: roles, default: 'user' }
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret['password']
      delete ret['_id']
    }
  }
})

userSchema.pre('save', function (next) {
  console.log(123123)
  next()
})

module.exports = mongoose.model('User', userSchema)