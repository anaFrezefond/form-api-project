import { Request, Response } from "express";
import { saveForm } from '../services/saveForm';
import { queryResults } from '../services/queryResults';

export const getUserResponses = async (req: Request, res: Response) => {
  // queryResult prend en entrée un objet typé et retourne un objet typé
  // pas de res / req
  // logique claire côté service
  // input => output
  try {
    await queryResults(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const submitCreationForm = async (req: Request, res: Response) => {
  try {
    const questionResponsesObject = req.body;
    const savedForm = await saveForm(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
