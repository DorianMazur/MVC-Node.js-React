import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const FormView = props => {
  if (!props.show) return null;
  return <Message error>{props.message || 'Unexpected error ocurred!'}</Message>;
};

FormView.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
};

export default FormView;
