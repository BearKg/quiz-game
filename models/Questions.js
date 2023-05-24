const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  id: {
    type: String,
    enum: {
      values: ["A", "B", "C", "D"],
      message: "{VALUE} is not supported",
    },
    unique: true,
    required: [true, "must provide your choice"]
  },
  content: {
    type: String,
    required: [true, "must provide your content"],
  },
  _id: Number
});

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  answers: {
    type: [answerSchema],
    id_1: Number
  },
  correct: {
    type: String,
    required: [true, "must provide correct answer"],
    maxlength: 1,
  },
});

module.exports = mongoose.model('question', questionSchema)