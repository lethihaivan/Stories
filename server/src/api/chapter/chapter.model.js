import mongoose from 'mongoose'

const schema = mongoose.Schema(
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
      transform: (obj, ret) => { delete ret._id }
    }
  }
)
const model = mongoose.model('Chapter', schema)
export default model