import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import City from "./pages/City";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/:city" component={City} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
