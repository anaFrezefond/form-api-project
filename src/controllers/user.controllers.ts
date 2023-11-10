import { Request, Response } from 'express';
import { queryUserFormById } from '../services/queryUserFormById';
import { saveUserResponses } from '../services/saveUserResponses';

export const getUserFormById = async (req: Request, res: Response) => {
    try{
    await queryUserFormById(req, res);
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    }
};

export const submitCreationForm = async (req: Request, res: Response) => {
    try {
        const questionResponsesObject = req.body;
        const savedForm = await saveUserResponses(req, res);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}
