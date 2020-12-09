import mongoose from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const CategorySchema = mongoose.Schema(
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
CategorySchema.plugin(mongooseKeywords, { paths: ['title'] });
const Category = mongoose.model('Category', CategorySchema)
export default Category