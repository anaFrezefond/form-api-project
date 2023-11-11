import { NextFunction, Request, Response } from 'express';
import { queryUserForm } from '../services/query.services';
import { saveUserResponses } from '../services/save.services';
import mongoose from 'mongoose';
import { 
  InternalServerError,
  MissingParamError, 
  NoResultsFoundError 
} from "../errors/errors";
import { IUserResponse } from '@/types/types';

interface QueryParams {
  formId?: string;
}

export const getUserForm = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const { formId } : QueryParams = req.params;

    if (!mongoose.Types.ObjectId.isValid(formId)) {
      next(new MissingParamError('Invalid form id'));
    return;
    }

    const objectIdFormId = new mongoose.Types.ObjectId(formId);
    const form = await queryUserForm(objectIdFormId);

    if (!form) {
      next(new NoResultsFoundError())
      return;
    }

    res.json(form);
  } catch (error) {
    console.error(error);
    next(new InternalServerError('Error in getUserForm'))
  }
};

export const submitUserResponses = async (req: Request<IUserResponse>, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const submittedResponses : IUserResponse = req.body;
        const savedForm = await saveUserResponses(submittedResponses);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
};
