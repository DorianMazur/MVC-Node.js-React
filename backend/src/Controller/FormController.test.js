import express from 'express';
import supertest from 'supertest';
import FormController from './FormController';

describe('FormController', () => {
  let service;
  let app;
  let request;

  beforeEach(async () => {
    service = {
      saveForm: jest.fn(() => Promise.resolve()),
    };
    const server = express();
    const controller = new FormController(service, server);
    app = await server.listen(1234);
    request = supertest(app);
  });

  afterEach(async () => {
    await app.close();
  });

  it('should properly call /saveForm', async () => {
    service.saveForm.mockReturnValue({ status: 200, body: { message: 'Registered!' } });
    const res = await request.put('/saveForm').send({});
    expect(res.status).toEqual(200);
    expect(res.text).toEqual(JSON.stringify({ message: 'Registered!' }));
  });
});
