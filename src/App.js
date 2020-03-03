import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store'
import Home from './containers/Home/Loadable';
import NotFound from './containers/NotFound/Loadable';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
