import mongoose, { Document } from 'mongoose';
import { Request, Response } from 'express';
import FormModel, { IForm } from '../database/formModel';
import UserResponseModel from '../database/responsesModel';

const saveUserResponses = async (req: Request, res: Response) => {
        try {
          const { formId, userId, responses } = req.body;
      
          console.log(req.body)
          // Check if formId is provided in the request body
          if (!formId) {
            return res.status(400).send('formId is required in the request body');
          }
      
          // Convert formId to ObjectId
          const objectIdFormId = new mongoose.Types.ObjectId(formId);
      
          const form = await FormModel.findById(objectIdFormId);
      
          if (!form) {
            return res.status(404).send('Form not found');
          }
      
          // Validate and process user responses
          const userResponses = [];
      
          for (const response of responses) {
            const question = form.questions.find(q => q._id.toHexString() === response.questionId);
      
            if (!question) {
              return res.status(400).send('Invalid questionId');
            }
      
            userResponses.push({
              questionId: question._id,
              answerText: response.answer,
            });
          }
      
          // Save user responses to the database
          const userResponse = new UserResponseModel({
            userId: new mongoose.Types.ObjectId(userId),
            formId: objectIdFormId,
            answers: userResponses,
          });
      
          await userResponse.save().then((savedForm: { _id: any; }) => {
            console.log(savedForm._id); // Access the generated _id field
            res.send(`Information successfully saved: ${savedForm}`);
          });
      
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
}

export { saveUserResponses };
