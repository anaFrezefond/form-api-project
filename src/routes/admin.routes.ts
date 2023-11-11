import express from 'express';
import {
    submitCreationForm, 
    getUserResponses,
} from '../controllers/admin.controllers';

const adminRouter = express.Router();

adminRouter.post('/admin/submit', submitCreationForm);
adminRouter.get('/admin/userResponse/:userId/:formId', getUserResponses)

export default adminRouter;
