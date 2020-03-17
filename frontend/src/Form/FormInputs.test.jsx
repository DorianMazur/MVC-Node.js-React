import '@testing-library/jest-dom';
import React from 'react';

import { render } from '@testing-library/react';
import FormInputs from './FormInputs.jsx';

const props = {
  firstName: 'Test',
  lastName: 'Test',
  email: 'Test@Test.pl',
  updateData: jest.fn(),
};

test('FormInputs render correctly', () => {
  const container = render(<FormInputs {...props} />);
  expect(container.baseElement).toMatchSnapshot();
});
