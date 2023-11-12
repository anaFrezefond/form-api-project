import { IForm, IQuestion } from '../types/types';
import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema<IQuestion>({
  questionText: { type: String, required: true },
  questionType: { type: String, required: true },
  questionNumber: { type: Number, required: true },
});

const FormSchema = new Schema<IForm>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  questions: [QuestionSchema],
});

const FormModel = mongoose.model<IForm>('Form', FormSchema);

export default FormModel;
