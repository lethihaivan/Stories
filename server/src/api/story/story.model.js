import mongoose from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

import { populate, status } from './story.constants'
import Rating from '../rating/rating.model'

const StorySchema = mongoose.Schema(
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
      transform: (obj, ret) => {
        delete ret._id
        delete ret.keywords
      }
    }
  }
)

StorySchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'story',
  options: {
    sort: { updatedAt: -1 }
  }
});

StorySchema.methods.populateStory = async function () {
  return await this.populate(populate).execPopulate()
}

StorySchema.methods.getRating = async function () {
  const ratings = await Rating.find({ storyId: this._id })
  const point = ratings.reduce((acc, cur) => (acc + cur.point) / ratings.length, 0)
  return point.toFixed(2)
}
StorySchema.plugin(mongooseKeywords, { paths: ['name', 'author'] })
const Story = mongoose.model('Story', StorySchema)
export default Story