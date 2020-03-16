import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FormInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateData({ [event.target.id]: event.target.value });
  }

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <Segment>
        <Form.Input
          id="firstName"
          fluid
          icon="user"
          iconPosition="left"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          id="lastName"
          fluid
          icon="user outline"
          iconPosition="left"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          id="email"
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
      </Segment>
    );
  }
}

FormInputs.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  updateData: PropTypes.func,
};

export default FormInputs;
