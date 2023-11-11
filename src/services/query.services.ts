import { FormNotFoundError, QueryResultsError } from '../errors/errors';
import ResultModel from '../models/responsesModel';
import { IUserResponse } from '@/types/types';
import mongoose from 'mongoose';
import FormModel from '../models/formModel';

interface QueryParams {
  formId?: string;
  userId?: string;
}

export const queryResults = async (queryParams: QueryParams): Promise<IUserResponse[]>=> {
  try {
    const results = await ResultModel.find(queryParams);
    return results;
  } catch (error) {
    console.error('Error in queryResultsById:', error);
    throw new QueryResultsError('Error in queryResultsById');
  }
};

export const queryUserForm = async (objectIdFormId: mongoose.Types.ObjectId) => {
  try {
    const form = await FormModel.findById(objectIdFormId);
    if (!form) {
        throw new FormNotFoundError('Form not found');
    }
    return form
  } catch (error) {
    console.error('Error in queryUserForm:', error);
    throw error 
  }
};
