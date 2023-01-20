import request from 'supertest';
import app from './index.js';
import expect from 'expect';
 
describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Test the GET /get-email-times path', () => {
  test('It should return the email times in the database', () => {
    return request(app).get('/get-email-times').then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
    });
  });
  test('It should return an array', () => {
    return request(app).get('/get-email-times').then(response => {
      expect(Array.isArray(response.body)).toBeTruthy();
    });
  });
});

describe('Test the POST /generate-email-times path', () => {
  test('It should generate and post the email times correctly', () => {
    const data = {
      numberOfEmails: 10,
      startTime: '11:00',
      endTime: '13:00',
      numberOfAccounts: 5,
    };
    return request(app).post('/generate-email-times').send(data).then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
    });
  });
});

describe('Test the DELETE /delete-all-email-times path', () => {
  test('It should delete all email times from the database', () => {
    return request(app).delete('/delete-all-email-times').then(response => {
      expect(response.statusCode).toBe(204);
    });
  });
});