import mongoose from 'mongoose'
import { populate, status } from './story.constants'
import Rating from '../rating/rating.model'
const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, },
    createdBy: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    // rating: { type: Number, default: 0 },
    status: { type: String, enum: status, default: 'unfulfilled' },
    author: { type: mongoose.Types.ObjectId, required: true, ref: 'Author' },
    categories: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Category' }],
    chapters: [{ type: mongoose.Types.ObjectId, ref: 'Chapter' }],
    // comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => { delete ret._id }
    }
  }
)
schema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'storyId',
  options: {
    sort: { updatedAt: -1 }
  }
});

schema.methods.populateStory = async function () {
  return await this.populate(populate).execPopulate()
}

schema.methods.getRating = async function () {
  const ratings = await Rating.find({ storyId: this._id })
  const point = ratings.reduce((acc, cur) => (acc + cur.point) / ratings.length, 0)
  return point.toFixed(2)
}
const model = mongoose.model('Story', schema)
export default model