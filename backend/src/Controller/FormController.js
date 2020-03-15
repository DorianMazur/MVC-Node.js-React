export default class FormController {
  constructor(formService, server) {
    this.formService = formService;
    this.server = server;
    this.prepareEndpoints();
  }

  prepareEndpoints() {
    this.server.put('/saveForm', (req, res) => {
      console.log(req, res);
    });
  }
}
