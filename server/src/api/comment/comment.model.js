import mongoose from 'mongoose'
const { populate } = require('./comment.constants')

const schema = mongoose.Schema(
  {
    author: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    commentParent: { type: mongoose.Types.ObjectId, ref: 'Comment', default: null },
    commentChildren: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    storyId: { type: mongoose.Types.ObjectId, ref: 'Story', required: true }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret.commentParent
        delete ret._id
      }
    }
  }
)

schema.methods.populateComment = async function () {
  return await this.populate(populate).execPopulate()
}

const model = mongoose.model('Comment', schema)
// schema.methods.populateAuthor = async function () {
//   const result = await this.populate('author').execPopulate()
//   return result
// }

export default model