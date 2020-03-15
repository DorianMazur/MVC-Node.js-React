import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import FormInputs from './FormInputs.jsx';
import FormMessage from './FormMessage.jsx';

export default class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMessage: false, errorMessage: null, firstName: '', lastName: '', email: '' };
    this.updateData = this.updateData.bind(this);
    this.register = this.register.bind(this);
  }

  updateData(data) {
    this.setState({ showMessage: false, errorMessage: null });
    this.setState(data);
  }

  register() {
    const { firstName, lastName, email } = this.state;
    if (!firstName.length || !lastName.length || !email.length) {
      this.setState({ showMessage: true, errorMessage: 'Fill all fields!' });
      return;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({ showMessage: true, errorMessage: 'Email is wrong!' });
      return;
    }
  }

  render() {
    const { showMessage, firstName, lastName, email, errorMessage } = this.state;
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Register new account
          </Header>
          <Form size="large">
            <FormInputs updateData={this.updateData} firstName={firstName} lastName={lastName} email={email} />
            <Button fluid size="large" onClick={this.register}>
              Register
            </Button>
          </Form>
          <FormMessage show={showMessage} message={errorMessage} />
        </Grid.Column>
      </Grid>
    );
  }
}
