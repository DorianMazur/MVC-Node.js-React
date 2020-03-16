import FormService from './FormService';

describe('FormService', () => {
  let service, repository;

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

  it('should throw error when random error ocurred', async () => {
    repository.create.mockReturnValue(null);
    const result = await service.saveForm({ firstName: 'Test', lastName: 'Test', email: 'Test@test.pl' });
    expect(result).toEqual({ status: 404, body: { message: 'Error!' } });
  });
});
