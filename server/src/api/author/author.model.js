import mongoose from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const AuthorSchema = mongoose.Schema({
  fullName: { type: String, require: true },
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret['_id']
      delete ret.keywords
    }
  }
})

AuthorSchema.plugin(mongooseKeywords, { paths: ['fullName'] })
const Author = mongoose.model('Author', AuthorSchema)
export default Author