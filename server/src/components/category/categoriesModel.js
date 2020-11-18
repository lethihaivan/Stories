const mongoose = require('mongoose')

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

module.exports = mongoose.model('Category', schema)