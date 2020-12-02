import mongoose from 'mongoose'

const schema = mongoose.Schema(
  {
    title: { type: String, required: true, },
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
const model = mongoose.model('Category', schema)
export default model