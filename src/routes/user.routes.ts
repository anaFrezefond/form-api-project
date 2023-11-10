import express from "express";
import { 
  getUserFormById, 
  submitCreationForm
} from "../controllers/user.controllers";

const userRouter = express.Router();

// Extra to do : add Middleware for user input validation
// Extra to do : secure routes 
// Extra to do : swagger documentation

userRouter.get('/user/form/:formId', getUserFormById);
userRouter.post('/user/submit', submitCreationForm)
  
export default userRouter;
