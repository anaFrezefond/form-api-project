import ResultModel from '../database/responsesModel';
import { Request, Response } from 'express';

// Découper comme prévu ! 

const queryResults = async (req: Request, res: Response) => {
  try {
    const { formId, userId } = req.params;
    console.log(req.params)

    if (!formId && !userId) {
      return res.status(400).send('formId or userId parameter is required');
    }

    let query: any = {};

    if (formId) {
      query.formId = formId;
    }

    if (userId) {
      query.userId = userId;
    }

    console.log(query)

    const results = await ResultModel.find(query);
    res.send(results);
  } catch (error) {
    console.error('Error in queryResultsById:', error);
    res.status(500).send('Internal Server Error');
  }
};

export { queryResults };

