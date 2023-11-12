import express from 'express';
import { submitCreatedForm, getUserResponses } from '../controllers/admin.controllers';

const adminRouter = express.Router();

adminRouter.post('/admin/submit', submitCreatedForm);
adminRouter.get('/admin/userResponse/:userId/:formId', getUserResponses);

export default adminRouter;
