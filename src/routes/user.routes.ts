import express from 'express';
import { getUserForm, submitUserResponses } from '../controllers/user.controllers';

const userRouter = express.Router();

userRouter.get('/user/form/:formId', getUserForm);
userRouter.post('/user/submit', submitUserResponses);

export default userRouter;
