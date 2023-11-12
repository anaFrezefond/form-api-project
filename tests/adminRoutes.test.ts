import request from 'supertest';
import app from '../src/server';
import mongoose from 'mongoose';

beforeEach(async () => {
  await mongoose.connect('mongodb://localhost:27017');
});

describe('POST /admin/submit', () => {
  it('should create a form with several questions', async () => {
    const response = await request(app)
      .post('/admin/submit')
      .set('Content-Type', 'application/json')
      .send({
        userId: '67e0464059a0efb9ff',
        title: 'Week at work: satisfaction form',
        questions: [
          {
            questionText: 'How do you rate your week at the office?',
            questionType: 'rating',
            questionNumber: 1,
          },
          {
            questionText: 'What are the areas you would like to improve?',
            questionType: 'text',
            questionNumber: 2,
          },
        ],
      });
    expect(response.status).toBe(200);
  });
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
