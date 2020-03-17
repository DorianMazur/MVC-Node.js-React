import '@testing-library/jest-dom';
import React from 'react';

import { render } from '@testing-library/react';
import FormMessage from './FormMessage.jsx';

test('FormMessage render correctly (error message)', () => {
  const container = render(<FormMessage show={true} message={'Error Test Message!'} error={true} />);
  expect(container.baseElement).toMatchSnapshot();
});

test('FormMessage render correctly (success message)', () => {
  const container = render(<FormMessage show={true} message={'Success Test Message!'} />);
  expect(container.baseElement).toMatchSnapshot();
});

test('FormMessage render correctly (no message)', () => {
  const container = render(<FormMessage show={false} message={'Error Test Message!'} erorr={true} />);
  expect(container.baseElement).toMatchSnapshot();
});
