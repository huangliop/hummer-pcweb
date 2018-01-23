import React, { Component } from 'react';
import './App.css';
import Async from 'react-code-splitting';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import rootStore from './stores/RootStore';

useStrict(true);

class App extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Router>
          <div>
            <Route
              path="/"
              exact
              component={() => <Async load={import('./pages/Home')} />}
            />
            <Route
              path="/login"
              exact
              component={() => <Async load={import('./pages/Login')} />}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
