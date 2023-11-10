import express, { Application } from 'express';
import dotenv from 'dotenv';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';
import connectToDatabase from './configs/db';

dotenv.config({ path: '.env' });

const app: Application = express();
const port = process.env.PORT || 3000;

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(userRouter);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
