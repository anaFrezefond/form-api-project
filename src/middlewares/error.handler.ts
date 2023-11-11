import { Request, Response, NextFunction } from 'express';
import {
  InternalServerError,
  MissingParamError,
  NoResultsFoundError,
} from '../errors/errors';

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof MissingParamError) {
    res.status(400).send(error.message);
  } else if (error instanceof NoResultsFoundError) {
    res.status(404).send(error.message);
  } else if (error instanceof InternalServerError) {
    res.status(500).send(error.message);
  } else {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal server error');
  }
};

export default errorMiddleware;

