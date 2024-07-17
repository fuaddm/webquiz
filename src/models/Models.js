import mongoose, { Schema } from 'mongoose';

const questionSchema = new Schema({
  question: { type: String, required: true, trim: true },
  options: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length === 4;
      },
      message: (props) => `${props.value} does not have exactly 4 options!`,
    },
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v >= 0 && v < 4;
      },
      message: (props) => `${props.value} is not a valid index for correctAnswer!`,
    },
  },
});

const categorySchema = new mongoose.Schema({
  name: { type: String, trim: true },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
});
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

export { Category, Question };
