import mongoose, { Document } from 'mongoose';
import { Request, Response } from 'express';
import FormModel, { IForm } from '../database/formModel';

const saveForm = async (req: Request, res: Response) => {
  try {
    const { title, questions } = req.body;

    const questionsWithNumber = questions.map((question: any, index: number) => ({
      ...question,
      questionNumber: index + 1,
    }));

    const form = new FormModel({
      title,
      questions: questionsWithNumber,
    });

    form.save().then((savedForm: IForm & Document) => {
      console.log(savedForm._id); // Access the generated _id field
      res.send(`Information successfully saved: ${savedForm}`);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export { saveForm };
