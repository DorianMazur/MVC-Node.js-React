import '@testing-library/jest-dom';
import React from 'react';

import { render } from '@testing-library/react';
import FormView from './FormView.jsx';

test('FormView render correctly', () => {
  const container = render(<FormView />);
  expect(container.baseElement).toMatchSnapshot();
});
