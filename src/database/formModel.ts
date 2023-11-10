import mongoose, { Document, Schema } from 'mongoose';

// Surement à exporter pour réutilisable 
interface IQuestion {
  _id: any;
  questionText: string;
  questionType: string;
  questionNumber: number;
}

export interface IForm extends Document {
  title: string;
  questions: IQuestion[];
}

const QuestionSchema = new Schema<IQuestion>({
  questionText: { type: String, required: true },
  questionType: { type: String, required: true },
  questionNumber: { type: Number, required: true },
});

const FormSchema = new Schema<IForm>({
  title: { type: String, required: true },
  questions: [QuestionSchema],
});

const FormModel = mongoose.model<IForm>('Form', FormSchema);

export default FormModel;
