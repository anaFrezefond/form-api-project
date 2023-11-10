import mongoose from 'mongoose';
import { Request, Response } from 'express';
import FormModel from '../database/formModel';

interface MyCustomError extends Error {
    // To see how to do ? 
  }

const queryUserFormById = async (req: Request, res: Response) => {
  try {
    const { formId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(formId)) {
      return res.status(400).json({ error: 'Invalid formId' });
    }

    const objectIdFormId = new mongoose.Types.ObjectId(formId);
    const form = await FormModel.findById(objectIdFormId);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.json(form);
  } catch (error : any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

export { queryUserFormById };
