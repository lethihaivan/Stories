const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    index: { type: Number, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    story_id: { type: mongoose.Types.ObjectId, ref: 'Story', required: true }
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

module.exports = mongoose.model('Chapter', schema)