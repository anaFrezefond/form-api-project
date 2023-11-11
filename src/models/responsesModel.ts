import { IAnswer, IUserResponse } from '@/types/types';
import mongoose, { Schema } from 'mongoose';

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
