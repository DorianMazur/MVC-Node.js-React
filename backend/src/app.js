import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import FormRepository from './Repository/FormRepository';
import FormService from './Service/FormService';
import FormController from './Controller/FormController';

export default class App {
  constructor() {
    mongoose.connect('mongodb://localhost:27018/brainHub', { useUnifiedTopology: true, useNewUrlParser: true });
    this.server = express();
    this.server.use(cors());
    this.server.use(express.logger('dev'));
    this.server.use(express.bodyParser());

    this.formRepository = new FormRepository(mongoose);
    this.formService = new FormService(this.formRepository);
    this.formController = new FormController(this.formService, this.server);

    this.server.use((_, res) => {
      res.status(404).json({ message: 'Resource not found.' });
    });
  }

  async startServer() {
    return this.server.listen(process.env.PORT || 3000);
  }

  async stopServer() {
    return this.server.close();
  }
}
