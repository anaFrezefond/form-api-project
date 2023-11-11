import { Response } from 'express';
import mongoose from 'mongoose';
import { IForm, IUserResponse } from '@/types/types';
import FormModel from '../models/formModel';
import { FormNotFoundError, MissingParamError } from '../errors/errors';
import UserResponseModel from '../models/responsesModel';

export const saveForm = async (submittedForm: IForm): Promise<IForm> => {
  try {
    const { userId, title, questions } = submittedForm;

    const form = new FormModel({
      userId,
      title,
      questions: questions,
    });

    const savedForm = await form.save();
    return savedForm;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveUserResponses = async (submittedResponses: IUserResponse): Promise<IUserResponse> => {
    try {
      const { formId, userId, answers } = submittedResponses;
      console.log(submittedResponses);
  
      if (!formId) {
        throw new MissingParamError('formId');
      }
  
      const objectIdFormId = new mongoose.Types.ObjectId(formId);
      const form = await FormModel.findById(objectIdFormId);
  
      if (!form) {
        throw new FormNotFoundError();
      }
  
      const userResponses = [];
  
      for (const response of answers) {
        const question = form.questions.find((q) => q._id.toHexString() === response.questionId);
  
        userResponses.push({
          questionId: question?._id,
          answerText: response.answerText,
        });
      }
  
      const savedUserResponse = new UserResponseModel({
        userId: new mongoose.Types.ObjectId(userId),
        formId: objectIdFormId,
        answers: userResponses,
      });
      return savedUserResponse
    } catch (error) {
      console.error(error);
      throw error
    }
  };
  
