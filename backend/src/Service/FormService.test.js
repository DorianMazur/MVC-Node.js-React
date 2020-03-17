import FormService from './FormService';

describe('FormService', () => {
  let service;
  let repository;

  beforeEach(async () => {
    repository = {
      create: jest.fn(() => Promise.resolve()),
    };
    service = new FormService(repository);
  });

  it('should throw error when fields are missing', async () => {
    const result = await service.saveForm({ firstName: 'Test' });
    expect(result).toEqual({ status: 404, body: { message: 'Fill all fields!' } });
  });

  it('should throw error when fields are blank', async () => {
    const result = await service.saveForm({ firstName: '', lastName: '', email: '' });
    expect(result).toEqual({ status: 404, body: { message: 'Fill all fields!' } });
  });

  it('should throw error when email is incorrect', async () => {
    const result = await service.saveForm({ firstName: 'Test', lastName: 'Test', email: '312321321321' });
    expect(result).toEqual({ status: 404, body: { message: 'Email is wrong!' } });
  });

  it('should throw error when database is out of order', async () => {
    repository.create.mockReturnValue(null);
    const result = await service.saveForm({ firstName: 'Test', lastName: 'Test', email: 'Test@test.pl' });
    expect(result).toEqual({ status: 404, body: { message: 'Error!' } });
  });

  it('should properly save', async () => {
    const testObject = { firstName: 'Test', lastName: 'Test', email: 'Test@test.pl' };
    repository.create.mockReturnValue(testObject);
    const result = await service.saveForm(testObject);
    expect(repository.create.mock.calls[0][0]).toEqual(testObject);
    expect(result).toEqual({ status: 200, body: { message: 'Registered!' } });
  });
});
