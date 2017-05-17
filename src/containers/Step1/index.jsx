/*
 * Basic login page example that uses an atom and an organism
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';
import BasicHeader from '../../components/BasicHeader';
import { increment, decrement } from '../../redux/actions/counter-action';

class BasicLoginPage extends Component {
  componentDidMount() {
    console.log('Mounted My App!');
    console.log(this.props);
  }

  incrementClick(action) {
    this.props.dispatch(increment(action));
  }

  decrementClick(action) {
    this.props.dispatch(decrement(action));
  }

  loginAction(fields) {
    console.log(fields);
  }

  render() {
    const schema = {
      title: 'Todo',
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string', title: 'Title', default: 'A new task' },
        done: { type: 'boolean', title: 'Done?', default: false },
      },
    };

    return (
      <section id="login_page">
        <div>
          Counter: { this.props.counterReducer }
        </div>
        <button className="btn btn-default" onClick={() => this.decrementClick('DECREMENT')}>Decrement</button>
        <button onClick={() => this.incrementClick('INCREMENT')}>Increment</button>
        <BasicHeader>Login Form Page 1</BasicHeader>

        <Form
          id="login_form"
          schema={schema}
          validate={this.validate}
          showErrorList={false}
          onSubmit={x => console.log(x)}
        />
      </section>
    );
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    dispatch,
  };
};

const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicLoginPage);
