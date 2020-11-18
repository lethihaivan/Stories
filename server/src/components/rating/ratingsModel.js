const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    point: { type: Number, required: true, min: 0 },
    storyId: { type: mongoose.Types.ObjectId, required: true, ref: 'Story' },
    ratingBy: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
  },
  {
    timestamps: true,
    // versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => { delete ret._id }
    }
  }
)

module.exports = mongoose.model('Rating', schema)