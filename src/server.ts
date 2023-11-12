import express, { Application } from 'express';
import dotenv from 'dotenv';

import connectToDatabase from './config/db';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';

import { errorHandler } from './middlewares/error.handler';

dotenv.config({ path: '.env' });

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(userRouter);

app.use(errorHandler);

const launchServer = async () => {
  try {
    const port = process.env.PORT || 3000;
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

launchServer();

export default app;
