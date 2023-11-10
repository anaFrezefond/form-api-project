import mongoose, { Document, Schema } from 'mongoose';

interface IQuestion {
  _id: any;
  questionText: string;
  questionType: string;
}

export interface IForm extends Document {
  title: string;
  questions: IQuestion[];
}

interface IAnswer {
  questionId: any;
  answerText: string;
}

export interface IUserResponse extends Document {
  userId: any;
  formId: any;
  answers: IAnswer[];
}

const AnswerSchema = new Schema<IAnswer>({
  questionId: { type: Schema.Types.ObjectId, required: true },
  answerText: { type: String, required: true },
});

const UserResponseSchema = new Schema<IUserResponse>({
  userId: { type: Schema.Types.ObjectId, required: true },
  formId: { type: Schema.Types.ObjectId, required: true },
  answers: [AnswerSchema],
});

const UserResponseModel = mongoose.model<IUserResponse>('UserResponse', UserResponseSchema);

export default UserResponseModel;
