/*
 * Basic login page example that uses an atom and an organism
 */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BasicHeader from '../../components/BasicHeader';
import ParamHeader from '../../components/ParamHeader';

class ExamplePage2 extends Component {
  componentDidMount() {
    console.log('Mounted My App!');
  }

  loginAction(fields) {
    console.log(fields);
  }

  render() {
    return (
      <section>
        <BasicHeader>Page 2</BasicHeader>
        <div>
          <h2>Children</h2>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/child1`}>
                Child 1
              </Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/child2`}>
                Child 2
              </Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/child3`}>
                Child 3
              </Link>
            </li>
          </ul>

          <Route exact path={this.props.match.url} render={() => (
            <h3>Please select a Child Element.</h3>
          )}/>

          <Route path={`${this.props.match.url}/:childId`} component={ParamHeader} />
        </div>
      </section>
    );
  }
}

export default ExamplePage2;
