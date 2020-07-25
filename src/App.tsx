import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/404" component={NotFound} />
            <Route path="/:city" component={City} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
