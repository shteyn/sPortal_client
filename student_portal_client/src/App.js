import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </div>
  </Router>
);

export default App;
