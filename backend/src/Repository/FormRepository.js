export default class FormRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
    this.model = this.createSchema();
  }

  createSchema() {
    const { Schema } = this.mongoose;
    const formSchema = new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      eventDate: { type: Date, default: Date.now() },
    });
    return this.mongoose.model('Forms', formSchema);
  }

  async create(object) {
    return this.model.create(object).catch(err => {
      console.error(err);
      return null;
    });
  }
}
