import { NoResultsFoundError, QueryResultsError, SaveFormError } from '../errors/errors';
import ResponseModel from '../models/responsesModel';
import { IForm, IUserResponse } from '../types/types';
import FormModel from '../models/formModel';
interface QueryParams {
  formId?: string;
  userId?: string;
}

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
    console.error('Error in saveForm:', error);
    throw new SaveFormError('Error saving the form');
  }
};

export const queryResults = async (queryParams: QueryParams): Promise<IUserResponse[]> => {
  try {
    const results = await ResponseModel.find(queryParams);
    if (!results) {
      throw new NoResultsFoundError();
    }
    return results;
  } catch (error) {
    console.error('Error in queryResults:', error);
    throw new QueryResultsError('Error in queryResults');
  }
};
