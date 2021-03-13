import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ArticleScreen from "./screens/ArticleScreen/ArticleScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>

        <Route path="/article">
          <ArticleScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
