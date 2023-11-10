import express from 'express';
import {  
    submitCreationForm, 
    getUserResponses 
} from '../controllers/admin.controllers';

// To do next : add Middleware for user input validation
// To do next : secure routes 
// To do next : swagger documentation

const adminRouter = express.Router();

adminRouter.post('/admin/submit', submitCreationForm);

// à découper comme prévu
adminRouter.get('/admin/responseByForm/:formId',getUserResponses)
adminRouter.get('/admin/responseByUser/:userId',getUserResponses)
adminRouter.get('/admin/responseByUserAndForm/:userId/:formId', getUserResponses);

export default adminRouter;
