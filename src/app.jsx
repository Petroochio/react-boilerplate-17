import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Step1 from './containers/Step1';

// Stylesheets
import './stylesheets/main.scss';

// Example debug statement
// const log = debug('main:log');
// log('Cauldron has started');

class App extends Component {
  componentDidMount() {
    console.log('Mounted My App!');
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Page 1</Link></li>
          </ul>
          <Route exact path="/" component={Step1} />
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

function mapStateToProps(state) {
  return {
    counterState: state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
