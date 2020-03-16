export default class FormService {
  constructor(formRepository) {
    this.formRepository = formRepository;
  }

  async saveForm(body) {
    const { firstName, lastName, email } = body;
    if (!firstName || !lastName || !email) {
      return { status: 404, body: { message: 'Fill all fields!' } };
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return { status: 404, body: { message: 'Email is wrong!' } };
    }

    const savedForm = await this.formRepository.create(body);
    if (!savedForm) return { status: 404, body: { message: 'Error!' } };

    return { status: 200, body: { message: 'Registered!' } };
  }
}
