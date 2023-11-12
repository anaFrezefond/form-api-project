import { Request, Response, NextFunction } from 'express';
import { FormNotFoundError, InternalServerError, MissingParamError, NoResultsFoundError, QueryResultsError, SaveFormError } from '../errors/errors';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  if (error instanceof InternalServerError) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else if (error instanceof MissingParamError) {
    res.status(400).json({ error: error.message });
  } else if (error instanceof NoResultsFoundError) {
    res.status(404).json({ error: error.message });
  } else if (error instanceof QueryResultsError) {
    res.status(500).json({ error: error.message });
  } else if (error instanceof FormNotFoundError) {
    res.status(404).json({ error: error.message });
  } else if (error instanceof SaveFormError) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
};

export { errorHandler };
