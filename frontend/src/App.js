import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <h1>Home Page!</h1>} />
        <Route path="*" render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
