import { Document } from 'mongoose';

export interface IQuestion {
    _id: any;
    questionText: string;
    questionType: string;
    questionNumber: number;
  }
  
export interface IForm extends Document {
    userId: string;
    title: string;
    questions: IQuestion[];
}

export interface IAnswer {
    questionId: any;
    answerText: string;
}
  
export interface IUserResponse extends Document {
    userId: any;
    formId: any;
    answers: IAnswer[];
}
