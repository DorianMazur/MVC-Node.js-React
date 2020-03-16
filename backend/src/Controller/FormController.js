export default class FormController {
  constructor(formService, server) {
    this.formService = formService;
    this.server = server;
    this.prepareEndpoints();
  }

   prepareEndpoints() {
    this.server.put('/saveForm', async (req, res) => {
    const result = await this.formService.saveForm(req.body);
    console.log(result);
    res.status(result.status).json(result.body);
    });
  }
}
