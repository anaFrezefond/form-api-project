import { NextFunction, Request, Response } from 'express';
import { saveForm } from '../services/save.services';
import { queryResults } from '../services/query.services';
import { IForm, IUserResponse } from '@/types/types';
import { 
  InternalServerError,
  MissingParamError, 
  NoResultsFoundError 
} from '../errors/errors';

interface QueryParams {
  formId?: string;
  userId?: string;
}

type SavedFormValueType = string;

export const getUserResponses = async (req: Request, res: Response<IUserResponse[]>, next: NextFunction): Promise<void> => {
  const { formId, userId } = req.params;

  if (!formId && !userId) {
    next(new MissingParamError('formId or userId'));
    return;
  }

  const queryParams: QueryParams = {
    formId,
    userId
  };

  try {
    const results = await queryResults(queryParams);
    if (results.length === 0) {
      next(new NoResultsFoundError())
      return;
    }
    res.send(results);
  } catch (error) {
    console.error('Error in getUserResponses:', error);
    next(new InternalServerError('Error in getUserResponses'));
  }
};

export const submitCreationForm = async (req: Request<IForm>, res: Response<SavedFormValueType>, next: NextFunction): Promise<void> => {
  try {
    const submittedForm : IForm = req.body;
    const savedFormValue = await saveForm(submittedForm);
    res.send(`Information successfully saved: ${savedFormValue}`);
  } catch (error) {
    next(new InternalServerError('Error in submitCreationForm'))
  }
};
