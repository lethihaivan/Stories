import mongoose from 'mongoose'

const authorSchema = mongoose.Schema({
  fullName: { type: String, require: true },
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret['_id']
    }
  }
})

const model = mongoose.model('Author', authorSchema)
export default model