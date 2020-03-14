import express from 'express';

import FormRepository from './Repository/FormRepository';
import FormService from './Service/FormService';
import FormController from './Controller/FormController';

export default class App {
  constructor() {
    this.server = express();
    this.server.use(express.logger('dev'));
    this.server.use(express.bodyParser());

    this.formRepository = new FormRepository();
    this.formService = new FormService(this.formRepository);
    this.formController = new FormController(this.formService);

    this.server.use((err, _, res) => {
      res.status(err.status || 400).json({
        success: false,
        message: err.message || 'An error occured.',
        errors: err.error || [],
      });
    });

    this.server.use((_, res) => {
      res.status(404).json({ success: false, message: 'Resource not found.' });
    });
  }

  async startServer() {
    return this.app.listen(process.env.PORT || 3000);
  }

  async stopServer() {
    return this.app.close();
  }
}
