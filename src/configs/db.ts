import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface DatabaseConfig {
  url: string;
}

const databaseConfig: DatabaseConfig = {
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017',
};

const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(databaseConfig.url);
    console.log('MongoDB successfully Connected !');
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
};

export default connectToDatabase;
