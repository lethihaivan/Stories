import mongoose from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const ChapterSchema = mongoose.Schema(
  {
    index: { type: Number, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    storyId: { type: mongoose.Types.ObjectId, ref: 'Story', required: true }
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
ChapterSchema.plugin(mongooseKeywords, { paths: ['name', 'storyId'] });
const Chapter = mongoose.model('Chapter', ChapterSchema)
export default Chapter