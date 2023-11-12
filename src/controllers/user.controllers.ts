import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { queryUserForm, saveUserResponses } from '../services/user.services';
import { InternalServerError, MissingParamError, NoResultsFoundError } from '../errors/errors';
import { IUserResponse } from '../types/types';

interface QueryParam {
  formId?: string;
}

export const getUserForm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { formId }: QueryParam = req.params;

    if (!mongoose.Types.ObjectId.isValid(formId)) {
      next(new MissingParamError(formId));
      return;
    }

    const form = await queryUserForm(formId);

    if (!form) {
      next(new NoResultsFoundError());
      return;
    }

    res.status(200).send(form);
  } catch (error) {
    console.error(error);
    next(new InternalServerError('Error in getUserForm'));
  }
};

export const submitUserResponses = async (req: Request<IUserResponse>, res: Response<IUserResponse>, next: NextFunction): Promise<void> => {
  try {
    const submittedResponses: IUserResponse = req.body;
    const savedForm = await saveUserResponses(submittedResponses);
    res.status(200).send(savedForm);
  } catch (error) {
    console.error(error);
    next(new InternalServerError('Error in submitUserResponses'));
  }
};
