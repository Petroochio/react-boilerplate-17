/*
 * Basic login form example
 * Includes functionality for sending all data to a loginAction function
 */
import React, { Component } from 'react';
import Form from 'react-jsonschema-form';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  /**
   * Curried function for setting a form key on state object
   * @param key - string value that corrolates to value in state
   */
  fieldChange = (key) => {
    const fieldUpdate = {};

    return (event) => {
      fieldUpdate[key] = event.target.value;
      this.setState(fieldUpdate);
    };
  }

  // When the submit event happens, trigger the login action
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginAction(this.state);
  }

  render() {
    const { username } = this.state;

    const schema = {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
      }
    }

    return (
      <Form
        id="login_form"
        schema={schema}
        onSubmit={x => console.log(x)}
      />
    );
  }
}

export default LoginForm;
