import mongoose from 'mongoose';
import { IUserResponse } from '../types/types';
import FormModel from '../models/formModel';
import { FormNotFoundError } from '../errors/errors';
import UserResponseModel from '../models/responsesModel';

export const queryUserForm = async (formId: string) => {
  try {
    const objectIdFormId = new mongoose.Types.ObjectId(formId);
    const form = await FormModel.findById(objectIdFormId);
    if (!form) {
      throw new FormNotFoundError('Form not found');
    }
    return form;
  } catch (error) {
    console.error('Error in queryUserForm:', error);
    throw error;
  }
};

export const saveUserResponses = async (submittedResponses: IUserResponse): Promise<IUserResponse> => {
  try {
    const { formId, userId, answers }: IUserResponse = submittedResponses;

    const userResponse = new UserResponseModel({
      userId: new mongoose.Types.ObjectId(userId),
      formId: new mongoose.Types.ObjectId(formId),
      answers: answers,
    });

    const savedUserResponse = await userResponse.save();
    return savedUserResponse;
  } catch (error) {
    console.error('Error in saveUserResponses:', error);
    throw error;
  }
};
